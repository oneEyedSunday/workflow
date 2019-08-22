import { Injectable } from '@angular/core';
import { IUser } from '@shared/interfaces';
import { AppConfig } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '@shared/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {
  private readonly handleError: HandleError;
  private readonly url = AppConfig.API_URL + '/account/profile/';

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('Profile');
  }

  fetchUserDetails(): Observable<IUser> {
    return this.http.get(this.url).pipe(
      catchError(this.handleError('Fetch profile', null))
    );
  }

}
