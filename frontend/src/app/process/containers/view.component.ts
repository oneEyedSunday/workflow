import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of, Observable, throwError, iif, fromEvent } from 'rxjs';
import { switchMap, catchError, tap, takeUntil } from 'rxjs/operators';
import { DragulaService } from 'ng2-dragula';
import * as feather from 'feather-icons';
import {
  Stage, Task, Process, IUser,
  IGroup, IForm, Document
} from '@shared/interfaces';
import { StageService, ProcessService, TaskService } from '../services';
import { AuthService } from '@shared/auth';
import { DocumentService } from '../../documents/services';
import { GroupsService, UsersService } from '../../organization/services';
import { FormsService } from '../../forms/services';

interface Coords {
  bottom: number;
  right: number;
  left: number;
  top: number;
  x: number;
  y: number;
  height: number;
  width: number;
}

type SideBarTriggers = 'addTask' | 'editTask' | 'addStage' | 'editStage' | 'openTask' | 'openStage';

@Component({
  selector: 'app-projects-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss',  './boards.scss']
})
export class ViewComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('refProcessBoardContainer', { read: ElementRef, static: false }) _boardContainerRef: ElementRef;
  get boardContainerRef() {
    return this._boardContainerRef;
  }
  @ViewChild('refSidePane', { read: ElementRef, static: false }) sidePaneRef: ElementRef;
  existingProcess: boolean;
  process: Process;
  user: IUser;
  dragulaGroups: string[] = [];
  users: IUser[] = [];
  groups: IGroup[] = [];
  forms: IForm[] = [];
  documents: Document[] = [];
  sidebarContent: {
    content: Task | Stage;
    description: string;
    extra?: Stage
  } = null;
  public coords = {
    body: null,
    taskboard: null
  };

  uiState = {
    loading: true,
    stageError: false,
    taskError: false
  };

  constructor(
    private _actRoute: ActivatedRoute,
    private _router: Router,
    private _dragulaService: DragulaService,
    // add ref to notif eg toasts
    private _auth: AuthService,
    private _proSvc: ProcessService,
    private _stageSvc: StageService,
    private _formsSvc: FormsService,
    private _docSvc: DocumentService,
    private _groupsSvc: GroupsService,
    private _taskSvc: TaskService,
    private _usersSvc: UsersService
    // scroll helper
  ) {
    this.user = (this._auth.currentUserValue as IUser);
  }

  ngOnInit() {
    this.fetchDocuments();
    this.fetchForms();
    this.fetchGroups();
    this.fetchUsers();
    this._actRoute.data.pipe(
      switchMap((data: { creating: boolean }) => {
        this.existingProcess = !!!data.creating;
        return iif(
          () => this.existingProcess,
          this.getProcess(),
          this.createBaseProcess()
        );
      }),
      tap(process => {
        this.bootstrapDragula();
        this.process = process;
        this.triggerFeather();
        this.uiState = {...this.uiState, loading: false};
      }),
      catchError(err => this.handleError(err))
    ).subscribe();
  }

  ngAfterViewInit() {
    this.triggerFeather();
  }

  getProcess(): Observable<Process> {
    return this._actRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (isNaN(+params.get('processId'))) {
          throw new Error('Invalid process id');
        } else {
          return this._proSvc.getProcessById(+params.get('processId'));
        }
      })
    );
  }

  createBaseProcess(): Observable<Process> {
    return this._proSvc.createProcess(this.user.id);
  }

  fetchUsers() {
    this._usersSvc.fetchAllUsers()
      .subscribe(users => {
        if (!(users || []).length) {
          this.users = [this.user];
        } else {
          this.users = users;
        }
      });
  }

  fetchGroups() {
    this._groupsSvc.fetchGroups()
      .subscribe(groups => this.groups = groups);
  }

  fetchForms() {
    this._formsSvc.getForms()
      .subscribe(forms => this.forms = forms);
  }

  fetchDocuments() {
    this._docSvc.fetchDocuments()
      .subscribe(docs => this.documents = docs);
  }

  handleError(err: any) {
    // show error in UI
    this.uiState = { ...this.uiState, loading: false };
    return throwError(err);
  }

  bootstrapDragula(): void {
    // TODO (oneeyedsunday) close stage view when moving stages
  }

  openSideBar(trigger: SideBarTriggers, content: Task | Stage, extra?: Stage): void {
    if (content) {
      content = {...content};
    }
    switch (trigger) {
      case 'addTask': case 'openTask': case 'editTask':
        content = content || new Task();
        this.sidebarContent = {
          content, description: (content as Task).id ? 'Update Task' : 'New Task',
          extra
        };
        break;
      case 'addStage': case 'openStage': case 'editStage':
        content = content || new Stage({ order: '' + ((this.process.stages || []).length + 1) });
        this.sidebarContent = {
          content, description: (content as Stage).name || 'New Stage'
        };
        break;
      default:
        // do not open side bar
        return;
    }

    (this.sidePaneRef.nativeElement as HTMLDivElement).classList.toggle('closed');
  }

  confirmDeleteStage(stage: Stage) {
    // TODO modals
    this._stageSvc.deleteStage(stage.id)
      .subscribe(() => {
        const stageIndex = this.process.stages
          .findIndex(s => s.id === stage.id);
        if (stageIndex > -1) {
          this.process.stages.splice(stageIndex, 1);
        }
      });
  }

  confirmDeleteTask(stage: Stage, task: Task) {
    // TODO confirmation modals
  }

  preventDefault(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  handleStageUpdate(stage: Stage) {
    if (stage.id) {
      this.updateStage(stage);
    } else {
      this.createStage({ ...stage,
        user: this.user.id,
        process: this.process.id,
        order: stage.order || this.process.stages.length + 1} );
    }
    // add user and process details?
  }

  createStage(stage: Partial<Stage>) {
    this.uiState = { ...this.uiState, stageError: false };
    this._stageSvc.createStage(stage)
      .subscribe((res: Stage) => {
        this.sidebarContent = null;
        this.process.stages.push(res);
        this.triggerFeather();
        (this.sidePaneRef.nativeElement as HTMLDivElement).classList.toggle('closed');
        // toastr success
      }, () => this.uiState = {...this.uiState, stageError: true});
  }

  updateStage(stage: Stage) {
    this.uiState = { ...this.uiState, stageError: false };
    this._stageSvc.updateStage(stage.id, { ...stage, user: this.user.id })
    .subscribe((res: Stage) => {
      this.sidebarContent = null;
      const stageIndex = this.process.stages
        .findIndex(s => s.id === res.id);
      if (stageIndex > -1) {
        this.process.stages[stageIndex] = stage;
      }
      this.triggerFeather();
      (this.sidePaneRef.nativeElement as HTMLDivElement).classList.toggle('closed');
      // toastr success
    }, () => this.uiState = {...this.uiState, stageError: true});
  }

  handleTaskUpdate(task: Task) {
    const cleanedTask = {...task, user: this.user.id,
      users: (task.users || []).map(u => u.id), document: task.document ? task.document.id : null,
      form: task.form ? task.form.formId : null,
      stage: task.stage.id, groups: task.groups ? ((task.groups || [0]) || {}).id : ''
    };
    console.log(task, cleanedTask);
    // check for update?
    if (task.id) {
      this.updateTask(cleanedTask);
    } else {
      this.createTask(cleanedTask);
    }
  }

  createTask(task: Partial<Task>) {
    this.uiState = { ...this.uiState, taskError: false };
    this._taskSvc.createTask(task)
      .subscribe((res: Task) => {
        this.sidebarContent = null;
        (this.sidePaneRef.nativeElement as HTMLDivElement).classList.toggle('closed');
        // find stage
        // right no
        // this.process.stages.find(s => s.id === res.stage);
      }, () => this.uiState = { ...this.uiState, taskError: true });
  }

  updateTask(task: Task) {
    this.uiState = { ...this.uiState, taskError: false };
    this._taskSvc.updateTask(task)
      .subscribe((res: Task) => {
        this.sidebarContent = null;
        (this.sidePaneRef.nativeElement as HTMLDivElement).classList.toggle('closed');
        console.log(res);
        // find stage,
        // find task
        // this.process.stages.find(s => s.id === res.stage);
      }, () => this.uiState = { ...this.uiState, taskError: false });
  }

  orderStages(stages?: Stage[]): Stage[] {
    return (stages || []).sort((a, b) => +a.order > +b.order ? 1 : -1);
  }

  // TODO update this to handle arrays
  getUserNameFromId(userId: number): string {
    const found = this.users.find(user => user.id === userId);
    if (!found) {
      return `Unknown`;
    }
    return `${found.first_name} ${found.last_name}`;
  }

  // TODO update this to handle arrays
  getGroupNameFromId(groupId: number): string {
    const found = this.groups.find(group => group.id === groupId);
    if (!found) {
      return `Unknown Group`;
    }
    return `Group: ${found.group_name}`;
  }

  getFormNameFromId(formId: number): string {
    const found = this.forms.find(form => form.id === formId);
    if (!found) {
      return 'Unknown Form';
    }
    return found.form_name;
  }

  getDoc(docId): Document {
    return this.documents.find(doc => doc.id === docId);
  }

  completeStage(stage: Stage) {
    this._stageSvc.completeStage(stage.id)
      .subscribe((res: Partial<Stage>) => {
        stage.isComplete = res.isComplete;
      });
  }

  completeTask(task: Task) {
    this._taskSvc.completeTask(task.id)
      .subscribe((res: Partial<Task>) => {
        task.isComplete = res.isComplete;
      });
  }

  triggerFeather(): void {
    Promise.resolve().then(() => {
      feather.replace();
      (window as any).feather.replace();
    });
    feather.replace();

    setTimeout(() => (window as any).feather.replace(), 30);
  }

  ngOnDestroy(): void {

  }

}