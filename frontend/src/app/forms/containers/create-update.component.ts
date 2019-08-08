import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/auth';
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
    constructor(
        private _builder: FormBuilderService,
        private router: Router
    ) { }

    ngOnInit() {
        (window as WindowWithToken).WORKFLOW_TOKEN = AuthService.getToken();
        this._builder.createFormTemplate()
            .subscribe(
                (res: string) => this._workflow_src_doc = res
            );
    }

    handleSuccessfulSubmission(evt: IForm) {
        //  success toastr here
        this.router.navigate(['/forms', evt.id]);
    }

}
