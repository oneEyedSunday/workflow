import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of, Observable, throwError, iif } from 'rxjs';
import { switchMap, catchError, tap } from 'rxjs/operators';
import { DocumentService } from '../services';
import { Document } from '@shared/interfaces';

@Component({
    selector: 'app-documents-create-update',
    templateUrl: './create-update.component.html'
})
export class CreateUpdateComponent implements OnInit {
  editing: boolean;
  document: Document;

  constructor(
    private _actRoute: ActivatedRoute,
    private _router: Router,
    private _docSvc: DocumentService
  ) { }

  ngOnInit() {
    this._actRoute.data.pipe(
      switchMap((data: { edit: boolean }) => {
        this.editing = !!data.edit;
        return iif(
          () => this.editing,
          this.getDocument(),
          of(new Document())
        );
      }),
      tap(doc => this.document = doc),
      catchError(err => this.handleError(err))
    ).subscribe();
  }

  getDocument(): Observable<Document> {
    return this._actRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (isNaN(+params.get('documentId'))) {
          throw new Error('Invalid document identifier');
        } else {
          return this._docSvc.getDocumentById(+params.get('documentId'));
        }
      })
    );
  }

  handleError(err: any) {
    // show error in UI
    // TODO (oneeyedsunday) move this to shared since its similar
    return throwError(err);
  }

}
