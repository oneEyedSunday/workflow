import { Injectable } from '@angular/core';
import { Process } from '@shared/interfaces';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '@shared/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  private readonly handleError: HandleError;
  private readonly url = AppConfig.API_URL;
  constructor(
      private http: HttpClient,
      httpErrorHandler: HttpErrorHandler
  ) {
      this.handleError = httpErrorHandler.createHandleError('Process');
  }

  fetchProcesses(): Observable<Process[]> {
    return this.http.get(this.url + '/process').pipe(
      map(response => response),
      catchError(this.handleError('Fetch Projects', null))
    );
  }

  getProcessById(id: number | string): Observable<Process> {
    return this.http.get(this.url + '/process/' + id).pipe(
      map(response => response),
      catchError(this.handleError('Fetch Project', null))
    );
  }

  createProcess(user: number) {
    const formData = new FormData();
    formData.append('user', `${user}`);
    formData.append('process_name', 'New Process');
    formData.append('description', 'A new process');
    formData.append('organization', '1');
    return this.http.post(this.url + '/process/', formData).pipe(
      catchError(this.handleError('Create Base Process Failed', null))
    );
  }

  updateProcessMeta(id: number, process: Partial<Process>): Observable<Partial<Process>> {
    type ProcessMeta = Pick<Process, 'process_name' | 'description'>;
    const { process_name, description } = process;
    const meta: ProcessMeta = { process_name, description };
    return this.http.patch(this.url + '/process/' + id + '/', meta).pipe(
      catchError(this.handleError('Failed to update Process meta', null))
    );
  }
}
