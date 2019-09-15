import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { IUser, IUserRegisteration } from '@shared/interfaces';


import { AppConfig } from '../../../environments/environment';


const USER_DATA_TOKEN = 'workflow_user_data';
const TOKEN = 'workflow_token';

interface AuthResponse {
  Token: string; User: any; hasPrivilege: boolean; isAdmin: boolean;
}

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  private _user = new BehaviorSubject<Partial<IUser>>(null);

  get user(): Observable<Partial<IUser>> {
    this._user.next(AuthService.getUserFromLocalStorage());
    return this._user.asObservable();
  }

  get token(): string {
    return localStorage.getItem(TOKEN);
  }

  set token(token: string) {
    localStorage.setItem(TOKEN, token);
  }

  get currentUserValue(): Partial<IUser> {
    // tslint:disable-next-line: no-unused-expression
    this.user;
    return this._user.getValue();
  }

  static getToken(): string {
    return localStorage.getItem(TOKEN);
  }

  static logout(): void {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER_DATA_TOKEN);
  }

  private static getUserFromLocalStorage(): Partial<IUser> {
    return JSON.parse(localStorage.getItem(USER_DATA_TOKEN));
  }

  login(creds: Pick<IUser, 'email' | 'password'>): Observable<any> {
    return this.http.post(`${AppConfig.API_URL}/account/login/`, creds)
      .pipe(
        tap((response: AuthResponse) => {
          const userWithPriv = { ...response.User, hasPrivilege: response.hasPrivilege, isAdmin: response.isAdmin };
          this._user.next(userWithPriv);
          localStorage.setItem(USER_DATA_TOKEN, JSON.stringify(userWithPriv));
          this.token = response.Token;
        })
      );
  }

  // TODO (oneeyedsunday) support for file uploads
  register(creds: IUserRegisteration) {
    return this.http.post<any>(`${AppConfig.API_URL}/account/signup/`, creds)
      .pipe(
        tap((res: AuthResponse) => {
          const userWithPriv = { ...res.User, hasPrivilege: res.hasPrivilege, isAdmin: res.isAdmin };
          this._user.next(userWithPriv);
          localStorage.setItem(USER_DATA_TOKEN, JSON.stringify(userWithPriv));
          this.token = res.Token;
        })
      );
  }
}

