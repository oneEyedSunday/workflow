import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of, Observable, throwError, iif } from 'rxjs';
import { switchMap, catchError, tap, finalize, delay } from 'rxjs/operators';
import { DocumentService } from '../services';
import { Document } from '@shared/interfaces';
import * as feather from 'feather-icons';
@Component({
    selector: 'app-documents-view',
    templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
    document: Document;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _docSvc: DocumentService
    ) { }

    ngOnInit() {
        feather.replace();
        this.getDocument();
    }

    getDocument() {
        this._route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                if (isNaN(+params.get('documentId'))) {
                    throw new Error('Invalid Document Id');
                } else {
                    return this._docSvc.getDocumentById(+params.get('documentId')).pipe(delay(1500));
                }
            }),
            tap(doc => this.document = doc),
            catchError(() => this._router.navigate(['documents']))
        ).subscribe();
    }

}
