import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, catchError, tap, finalize, takeUntil } from 'rxjs/operators';
import { DocumentService } from '../services';
import { Document } from '@shared/interfaces';
import * as feather from 'feather-icons';
@Component({
    selector: 'app-documents-view',
    templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit, OnDestroy {
    document: Document;
    taskId: number;
    notifying: boolean;
    private onDestroy$ = new Subject<void>();
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _docSvc: DocumentService
    ) { }

    get userCanAcknowledge(): boolean {
        if (!this.document) {
            return;
        }
        return (this.document['documenttasks'] || []).indexOf(this.taskId) > -1;
    }

    ngOnInit() {
        feather.replace();
        this.getDocument();
        this._route.queryParamMap
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((queryParams: ParamMap) => {
                const rawTaskId = queryParams.get('task');
                if (rawTaskId && !isNaN(parseInt(rawTaskId, 10))) {
                    this.taskId = parseInt(rawTaskId, 10);
                }
            });
    }

    getDocument() {
        this._route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                if (isNaN(+params.get('documentId'))) {
                    throw new Error('Invalid Document Id');
                } else {
                    return this._docSvc.getDocumentById(+params.get('documentId'));
                }
            }),
            tap(doc => this.document = doc),
            catchError(() => this._router.navigate(['documents']))
        ).subscribe();
    }

    notifyFlow() {
        this.notifying = true;
        this._docSvc.notifyEngine(this.taskId).pipe(
            finalize(() => this.notifying = false)
        ).subscribe(res => console.log(res));
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
    }

}
