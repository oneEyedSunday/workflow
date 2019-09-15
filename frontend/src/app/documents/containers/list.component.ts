import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services';
import { Document } from '@shared/interfaces';
import { AuthService } from '@shared/auth';
import { AuthorizationAwareComponent as WithAuth } from '@shared/authorization-aware.component';

@Component({
    selector: 'app-documents-list',
    templateUrl: './list.component.html'
})
export class ListComponent extends WithAuth implements OnInit {
    documents: Document[];
    loading: boolean;
    constructor(
      private _docSvc: DocumentService,
      authSvc: AuthService
      ) {
      super(authSvc);
    }

    ngOnInit() {
      this.loading = true;
      this.getDocuments();
    }

    getDocuments() {
      this._docSvc.fetchDocuments()
        .subscribe(
          docs => this.documents = docs,
          () => {this.loading = false; },
          () => this.loading = false
        );
    }

}
