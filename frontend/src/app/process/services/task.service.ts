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
    formData.append('stage', `${task.stage}`);
    formData.append('form', `${task.form}`);
    formData.append('user', `${task.user}`);
    formData.append('users', task.users);
    formData.append('document', task.document);
    formData.append('groups', task.groups);
    return this.http.post(this.url + '/process/stage/task/', formData).pipe(
      catchError(this.handleError('Create Task Failed', null))
    );
  }

  updateTask(task: Task): Observable<Task> {
    const formData = new FormData();
    formData.append('id', `${task.id}`);
    formData.append('stage', `${task.stage}`);
    formData.append('form', `${task.form}`);
    formData.append('user', `${task.user}`);
    formData.append('users', task.users);
    formData.append('document', task.document);
    formData.append('groups', task.groups);
    return this.http.put(`${this.url}/process/stage/task/${task.id}/`, formData).pipe(
      catchError(this.handleError('Update Task Failed', null))
    );
  }

  moveTask(taskId: number, stageId: number): Observable<Task> {
    const formData = new FormData();
    formData.append('id', `${taskId}`);
    formData.append('stage', `${stageId}`);
    return this.http.put(`${this.url}/process/stage/task/${taskId}`, formData).pipe(
      catchError(this.handleError('Move Task Failed', null))
    );
  }

  completeTask(taskId: number): Observable<Task> {
    const formData = new FormData();
    formData.append('isComplete', 'true');
    return this.http.patch(`${this.url}/process/stage/task/${taskId}/`, formData).pipe(
      catchError(this.handleError('Complete Task Failed', null))
    );
  }
}
