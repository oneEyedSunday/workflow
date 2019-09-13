import { Component, OnInit } from '@angular/core';
import { IUser, Document, IForm } from '@shared/interfaces';
import { DashboardService } from './service';
import { finalize, tap } from 'rxjs/operators';
import { DocumentService } from '../documents/services';
import { FormsService } from '../forms/services';
import * as feather from 'feather-icons';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        '../organization/components/group-card.component.scss',
        './dashboard.component.scss'
    ]
})
export class DashboardComponent implements OnInit {
    me: IUser;
    documents: Document[] = [];
    forms: IForm[] = [];
    loading: boolean;
    constructor(
        private _dashSvc: DashboardService,
        private _docSvc: DocumentService,
        private _formSvc: FormsService
    ) { }

    ngOnInit() {
        feather.replace();
        this.getUserDetails();
        this.getDocuments();
        this.getForms();
    }

    getUserDetails(): void {
        this.loading = true;
        this._dashSvc.fetchUserDetails()
        .pipe(
            tap(() => this.triggerFeather()),
            finalize(() => this.loading = false)
        )
        .subscribe(user => this.me = user);
    }

    getDocuments() {
        this._docSvc.fetchDocuments()
            .subscribe(docs => {
                this.documents = docs;
            });
    }

    getDocMeta(docId): Document {
        return this.documents.find(doc => doc.id === docId);
    }

    getForms() {
        this._formSvc.getForms()
            .subscribe(forms => {
                this.forms = forms;
            });
    }

    getFormMeta(formId: number): IForm {
        return this.forms.find(form => form.id === formId);
      }

    triggerFeather(): void {
        Promise.resolve().then(() => {
          feather.replace();
          (window as any).feather.replace();
        });
        feather.replace();

        setTimeout(() => (window as any).feather.replace(), 30);
    }

}
