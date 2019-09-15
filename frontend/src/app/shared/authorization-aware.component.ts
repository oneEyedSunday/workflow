import { AuthService } from '@shared/auth';

export class AuthorizationAwareComponent {

  constructor(
    protected _auth: AuthService
  ) {}

  get hasPrivilege(): boolean {
    if (!this._auth && this._auth.currentUserValue) {
      return false;
    }
    return this._auth.currentUserValue.isAdmin || this._auth.currentUserValue.hasPrivilege;
  }

  get isAdmin(): boolean {
    if (!this._auth && this._auth.currentUserValue) {
      return false;
    }
    return this._auth.currentUserValue.isAdmin;
  }
}
