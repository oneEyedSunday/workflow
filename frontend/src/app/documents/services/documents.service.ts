import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Document } from '@shared/interfaces';
import { AppConfig } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '@shared/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DocumentService {
    private readonly handleError: HandleError;
    private readonly url = AppConfig.API_URL;
    constructor(
        private http: HttpClient,
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

    addDocument(document: Partial<Document>, file: File) {
        const fd = new FormData();
        fd.append('organization', '1');
        // fd.append('documenttasks', '[]');
        fd.append('file', file, file.name);
        return this.http.post(this.url + '/process/document/', fd);
    }
}
