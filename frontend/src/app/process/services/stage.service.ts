import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stage } from '@shared/interfaces';
import { AppConfig } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HandleError, HttpErrorHandler } from '@shared/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class StageService {
  private readonly handleError: HandleError;
  private readonly url = AppConfig.API_URL;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('Stages');
  }

  createStage(stage: Partial<Stage>): Observable<Stage> {
    return this.http.post(this.url + '/process/stage', stage).pipe(
      catchError(this.handleError('Create Stage Failed', null))
    );
  }
}
