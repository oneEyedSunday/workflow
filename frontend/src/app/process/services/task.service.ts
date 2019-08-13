import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '@shared/interfaces';
import { AppConfig } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HandleError, HttpErrorHandler } from '@shared/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class TaskService {
  private readonly handleError: HandleError;
  private readonly url = AppConfig.API_URL;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('Tasks');
  }

  createTask(task: Partial<Task>): Observable<Task> {
    const formData = new FormData();
    formData.append('stage', '1');
    formData.append('form', '1');
    formData.append('user', `${task.user}`);
    formData.append('users', task.users);
    formData.append('document', task.document);
    formData.append('groups', task.groups);
    return this.http.post(this.url + '/process/stage/task', formData).pipe(
      catchError(this.handleError('Create Task Failed', null))
    );
  }
}
