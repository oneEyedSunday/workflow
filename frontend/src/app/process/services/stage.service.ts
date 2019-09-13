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
    return this.http.post(this.url + '/process/stage/', stage).pipe(
      catchError(this.handleError('Create Stage Failed', null))
    );
  }

  updateStage(id: number, stage: Stage): Observable<Stage> {
    return this.http.put(`${this.url}/process/stage/${id}/`, stage).pipe(
      catchError(this.handleError('Update Stage Failed', null))
    );
  }

  completeStage(stageId: number): Observable<Partial<Stage>> {
    return this.http.patch(`${this.url}/process/stage/${stageId}/`, { isComplete: true }).pipe(
      catchError(this.handleError('Complete Stage Failed', null))
    );
  }

  deleteStage(stageId: number) {
    return this.http.delete(`${this.url}/process/stage/${stageId}/`).pipe(
      catchError(this.handleError('Delete Stage Failed', null))
    );
  }
}
