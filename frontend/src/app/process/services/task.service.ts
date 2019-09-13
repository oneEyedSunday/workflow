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
    return this.http.post(this.url + '/process/stage/task/', task).pipe(
      catchError(this.handleError('Create Task Failed', null))
    );
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put(`${this.url}/process/stage/task/${task.id}/`, task).pipe(
      catchError(this.handleError('Update Task Failed', null))
    );
  }

  moveTask(taskId: number, stageId: number): Observable<Partial<Task>> {
    return this.http.patch(`${this.url}/process/stage/task/${taskId}/`, { id: taskId, stage: stageId }).pipe(
      catchError(this.handleError('Move Task Failed', null))
    );
  }

  completeTask(taskId: number): Observable<Task> {
    return this.http.patch(`${this.url}/process/stage/task/${taskId}/`, { isComplete: true }).pipe(
      catchError(this.handleError('Complete Task Failed', null))
    );
  }

  deleteTask(taskId: number) {
    return this.http.delete(`${this.url}/process/stage/task/${taskId}/`).pipe(
      catchError(this.handleError('Delete Task Failed', null))
    );
  }
}
