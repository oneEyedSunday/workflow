import { Injectable } from '@angular/core';

import { AppConfig } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '@shared/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IForm } from '@shared/interfaces';
import { AuthService } from '@shared/auth';

@Injectable()
export class FormsService {
    private readonly handleError: HandleError;
    private readonly url = AppConfig.API_URL + '/process/form/';

    constructor(
        private http: HttpClient,
        private auth: AuthService,
        httpErrorHandler: HttpErrorHandler
    ) {
        this.handleError = httpErrorHandler.createHandleError('Form Builder');
    }

    getForms(): Observable<IForm[]> {
        return this.http.get(this.url)
            .pipe(
                catchError(this.handleError('Fetch Forms', null))
            );
    }
}
