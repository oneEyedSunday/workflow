import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '@shared/auth';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
      private router: Router,
      private auth: AuthService,
      private toastr: ToastrService) {
  }


  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.auth.currentUserValue;
    if (!(user.isAdmin || user.hasPrivilege)) {
      this.router.navigate(['/dashboard']);
      this.toastr.error('You do not have enough permissions to view this page', 'Authorization');
      return false;
    }

    return true;
  }
}
