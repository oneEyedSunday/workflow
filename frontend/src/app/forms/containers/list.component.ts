import { Component, OnInit } from '@angular/core';
import { IForm } from '@shared/interfaces';
import { finalize, tap } from 'rxjs/operators';
import { FormsService } from '../services';
import { AuthService } from '@shared/auth';
import { AuthorizationAwareComponent as WithAuth } from '@shared/authorization-aware.component';

@Component({
    selector: 'app-forms-list',
    templateUrl: './list.component.html'
})
export class ListComponent extends WithAuth implements OnInit {
    loading: boolean;
    forms: IForm[];
    constructor(
        private _formsSvc: FormsService,
        authSvc: AuthService
    ) {
        super(authSvc);
    }

    ngOnInit() {
        this.getForms();
    }

    getForms(): void {
        this.loading = true;
        this._formsSvc.getForms()
            .pipe(
                finalize(() => this.loading = false)
            ).subscribe(
                forms => this.forms = forms,
                () => this.loading = false
            );
    }

}
