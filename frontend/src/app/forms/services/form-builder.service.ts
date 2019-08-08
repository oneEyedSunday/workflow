import { Injectable } from '@angular/core';

import { AppConfig } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '@shared/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class FormBuilderService {
    private readonly handleError: HandleError;
    private readonly url = AppConfig.API_URL + '/process/formbuilder/org';

    constructor(
        private http: HttpClient,
        // private auth: AuthService,
        httpErrorHandler: HttpErrorHandler
    ) {
        this.handleError = httpErrorHandler.createHandleError('Form Builder');
    }

    createFormTemplate(): Observable<any> {
        return this.http.get(`${this.url}/1/create/`, {
            responseType: 'text'
        })
            .pipe(
                catchError(this.handleError('Failed to Init Form Template', null))
            );
    }
}
