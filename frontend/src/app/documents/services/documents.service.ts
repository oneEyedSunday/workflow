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
                catchError(this.handleError('Fetch Documents', null))
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
        const { filename, description, link } = document;
        const data = { link, organization: 1, user: this.auth.currentUserValue.id, filename, description, documenttasks: [] };
        return this.http.post(this.url + '/process/document/', data);
    }

    notifyEngine(taskId: number) {
        return this.http.post(`${this.url}/process/processflow/`, { id: taskId }).pipe(
            catchError(this.handleError('Failed to acknowledge receipt', null))
        );
    }
}
