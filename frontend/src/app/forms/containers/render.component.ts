import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '@shared/auth';
import { switchMap, catchError, tap, takeUntil } from 'rxjs/operators';
import { FormBuilderService, FormsService } from '../services';

interface WindowWithToken extends Window {
    WORKFLOW_TOKEN: string;
}

@Component({
    selector: 'app-forms-view',
    templateUrl: './render.component.html'
})
export class ViewFormComponent implements OnInit, OnDestroy {
    _workflow_src_doc: string;
    existing: boolean;
    processMeta: { processId: string, taskId: number } | null = null;
    private destroy$ = new Subject<void>();
    constructor(
        private _builder: FormBuilderService,
        private _route: ActivatedRoute,
        private router: Router,
        private _formSvc: FormsService
    ) { }

    get referRoute(): any[] {
        if (this.processMeta && this.processMeta.processId) {
            return ['process', this.processMeta.processId];
        }
        return ['forms'];
    }

    ngOnInit() {
        this.getProcessMeta();
        this.getForm().pipe(
            tap(srcDoc => this._workflow_src_doc = srcDoc),
            catchError(err => this.router.navigate(this.referRoute))
        ).subscribe();

        (window as WindowWithToken).WORKFLOW_TOKEN = AuthService.getToken();
    }

    handleSuccessfulSubmission() {
        //  success toastr here
        this._formSvc.notifyEngine(this.processMeta.taskId).subscribe();
        this.router.navigate(this.referRoute);
    }

    getForm() {
        return this._route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                if (isNaN(+params.get('formId'))) {
                    throw new Error('Invalid form Id');
                } else {
                    return this._builder.renderForm(+params.get('formId'));
                }
            })
        );
    }

    getProcessMeta(): void {
        this._route.queryParams.pipe(takeUntil(this.destroy$))
        .subscribe((queryParams: Params) => {
            // @ts-ignore
            this.processMeta = {};
            const rawTaskId = queryParams['task'];
            if (rawTaskId && !isNaN(parseInt(rawTaskId, 10))) {
                this.processMeta.taskId = parseInt(rawTaskId, 10);
            }
            this.processMeta.processId = queryParams['process'];
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
    }

}
