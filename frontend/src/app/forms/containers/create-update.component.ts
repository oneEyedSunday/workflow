import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of, Observable, throwError, iif } from 'rxjs';
import { AuthService } from '@shared/auth';
import { switchMap, catchError, tap } from 'rxjs/operators';
import { FormBuilderService } from '../services';
import { IForm } from '@shared/interfaces';

interface WindowWithToken extends Window {
    WORKFLOW_TOKEN: string;
}

@Component({
    selector: 'app-forms-create-update',
    templateUrl: './create-update.component.html'
})
export class CreateUpdateComponent implements OnInit {
    _workflow_src_doc: string;
    existing: boolean;
    constructor(
        private _builder: FormBuilderService,
        private _route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this._route.data.pipe(
            switchMap((data: { edit: boolean }) => {
                this.existing = data.edit;
                return iif(
                    () => this.existing,
                    this.getFormTemplate(),
                    this._builder.createFormTemplate()
                );
            }),
            tap(srcDoc => this._workflow_src_doc = srcDoc),
            catchError(err => this.router.navigate(['/forms']))
        ).subscribe();

        (window as WindowWithToken).WORKFLOW_TOKEN = AuthService.getToken();
    }

    handleSuccessfulSubmission(evt: IForm) {
        //  success toastr here
        const target = ['forms'];
        if (!this.existing) {
            target.push(`${evt.id}`);
        }
        this.router.navigate(target);
    }

    getFormTemplate() {
        return this._route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                if (isNaN(+params.get('formId'))) {
                    throw new Error('Invalid form Id');
                } else {
                    return this._builder.fetchFormTemplate(+params.get('formId'));
                }
            })
        );
    }

}
