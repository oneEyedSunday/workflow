import { Injectable } from '@angular/core';
import { IUserRegisteration, IUser } from '@shared/interfaces';
import { AppConfig } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '@shared/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '@shared/auth';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  private readonly handleError: HandleError;
  private readonly url = AppConfig.API_URL + '/account/allusers/';

  constructor(
      private http: HttpClient,
      private auth: AuthService,
      httpErrorHandler: HttpErrorHandler
  ) {
      this.handleError = httpErrorHandler.createHandleError('Users');
  }

  fetchAllUsers(): Observable<IUser[]> {
    return this.http.get(this.url).pipe(
      catchError(this.handleError('Fetch Users failed', null))
    );
  }

}
