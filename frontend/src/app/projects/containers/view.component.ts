import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of, Observable, throwError, iif, fromEvent } from 'rxjs';
import { switchMap, catchError, tap, takeUntil } from 'rxjs/operators';
import { DragulaService } from 'ng2-dragula';
import * as feather from 'feather-icons';
import { Stage, Task, Process } from '@shared/interfaces';

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
  dragulaGroups: string[] = [];
  public coords = {
    body: null,
    taskboard: null
  };

  uiState = {
    loading: true
  };

  constructor(
    private _actRoute: ActivatedRoute,
    private _router: Router,
    private _dragulaService: DragulaService,
    // add ref to notif eg toasts
    // ref to auth svc
    // ref to process svc
    // form builder
    // scroll helper
  ) { }

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
    return of({} as Process);
  }

  createBaseProcess(): Observable<Process> {
    return of(new Process());
  }

  handleError(err: any) {
    // show error in UI
    return throwError(err);
  }

  bootstrapDragula(): void {
    // TODO (oneeyedsunday) close stage view when moving stages
  }

  openSideBar(contentType: string, content: any): void {
    (this.sidePaneRef.nativeElement as HTMLDivElement).classList.toggle('closed');
  }

  confirmDeleteColumn(details: any) {
    // TODO modals
  }

  preventDefault(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  ngOnDestroy(): void {

  }

}
