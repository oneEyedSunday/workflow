import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Document } from '@shared/interfaces';
import { AppConfig } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '@shared/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '@shared/auth';

@Injectable()
export class DocumentService {
    private readonly handleError: HandleError;
    private readonly url = AppConfig.API_URL;
    constructor(
        private http: HttpClient,
        private auth: AuthService,
        httpErrorHandler: HttpErrorHandler
    ) {
        this.handleError = httpErrorHandler.createHandleError('Documents');
    }

    fetchDocuments(): Observable<Document[]> {
        return this.http.get(this.url + '/process/document')
            .pipe(
                map(response => response),
                catchError(this.handleError('Fetch Documnets', null))
            );
    }

    getDocumentById(identifier: number | string): Observable<Document> {
        return this.http.get(this.url + '/process/document/' + identifier).pipe(
            map(response => response),
            catchError(this.handleError('Fetch Document', null))
        );
    }

    addDocument(document: Partial<Document>) {
        // TODO update organization
        const formData = new FormData();

        formData.append('link', document.link);
        formData.append('organization', '1');
        formData.append('user', this.auth.currentUserValue.id);
        formData.append('filename', document.filename);
        formData.append('description', document.description);
        return this.http.post(this.url + '/process/document/', formData);
    }
}
