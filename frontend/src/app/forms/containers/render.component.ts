import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of, Observable, throwError, iif } from 'rxjs';
import { AuthService } from '@shared/auth';
import { switchMap, catchError, tap } from 'rxjs/operators';
import { FormBuilderService } from '../services';

interface WindowWithToken extends Window {
    WORKFLOW_TOKEN: string;
}

@Component({
    selector: 'app-forms-view',
    templateUrl: './render.component.html'
})
export class ViewFormComponent implements OnInit {
    _workflow_src_doc: string;
    existing: boolean;
    referrer: string;
    constructor(
        private _builder: FormBuilderService,
        private _route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        // referrer is buggy
        const { referrer } = document;
        const { location } = window;
        if (referrer && referrer !== location.href) {
            this.referrer = referrer.replace(location.origin, '');
        }
        this.getForm().pipe(
            tap(srcDoc => this._workflow_src_doc = srcDoc),
            catchError(err => this.router.navigate(['forms']))
        ).subscribe();

        (window as WindowWithToken).WORKFLOW_TOKEN = AuthService.getToken();
    }

    handleSuccessfulSubmission() {
        //  success toastr here
        // TODO redirect to process that sent me here
        this.router.navigate(['process']);
    }

    return() {
        if (this.referrer) {
            return this.router.navigateByUrl(this.referrer);
        } else {
            return this.router.navigate(['forms']);
        }
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

}
