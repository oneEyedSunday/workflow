import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services';
import { Document } from '@shared/interfaces';
@Component({
    selector: 'app-documents-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
    documents: Document[];
    loading: boolean;
    constructor(private _docSvc: DocumentService) { }

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
