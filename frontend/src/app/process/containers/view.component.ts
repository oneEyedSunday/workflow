import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of, Observable, throwError, iif, fromEvent } from 'rxjs';
import { switchMap, catchError, tap, takeUntil } from 'rxjs/operators';
import { DragulaService } from 'ng2-dragula';
import * as feather from 'feather-icons';
import { Stage, Task, Process, IUser } from '@shared/interfaces';
import { StageService, ProcessService } from '../services';
import { AuthService } from '@shared/auth';

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
    // ref to auth svc
    private _auth: AuthService,
    private _proSvc: ProcessService,
    private _stageSvc: StageService
    // ref to process svc
    // scroll helper
  ) {
    this.user = (this._auth.currentUserValue as IUser);
  }

  ngOnInit() {
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
        feather.replace();
        this.uiState = {...this.uiState, loading: false};
        setTimeout(() => feather.replace());
      }),
      catchError(err => this.handleError(err))
    ).subscribe();
  }

  ngAfterViewInit() {
    feather.replace();
    setTimeout(() => feather.replace());
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

  handleError(err: any) {
    // show error in UI
    this.uiState = { ...this.uiState, loading: false };
    return throwError(err);
  }

  bootstrapDragula(): void {
    // TODO (oneeyedsunday) close stage view when moving stages
  }

  openSideBar(trigger: SideBarTriggers, content: Task | Stage, extra?: Stage): void {
    switch (trigger) {
      case 'addTask': case 'openTask': case 'editTask':
        content = content || new Task();
        this.sidebarContent = {
          content, description: (content as Task).summary || 'New Task',
          extra
        };
        break;
      case 'addStage': case 'openStage': case 'editStage':
        content = content || new Stage();
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

  confirmDeleteColumn(details: any) {
    // TODO modals
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
        (this.sidePaneRef.nativeElement as HTMLDivElement).classList.toggle('closed');
        // toastr success
      }, () => this.uiState = {...this.uiState, stageError: true});
  }

  updateStage(stage: Stage) {
  }

  handleTaskUpdate(task: Task) {
    console.log(task);
  }

  ngOnDestroy(): void {

  }

}
