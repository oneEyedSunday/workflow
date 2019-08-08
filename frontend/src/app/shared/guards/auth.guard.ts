import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    // TODO use ngbootstrap v5's toast for notif

    constructor(
        private router: Router,
        private auth: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        if (this.hasAuth()) {
            return true;
        }

        this.router.navigate(['/account/signin'], { queryParams: { returnUrl: state.url } });
    }

    hasAuth(): boolean {
        return !!this.auth.currentUserValue;
    }
}
