import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '@shared/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private toastr: ToastrService
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      switch (err.status) {
        case 401:
            // auto logout if 401 response returned from api
            this.toastr.error('Authentication Failed.', 'Authentication');
            this.router.navigate(['/account/signin'], { queryParams: { returnUrl: this.router.url } });
            AuthService.logout();
            return throwError('Please log  in again');
        case 404: default:
            // TODO (oneeyedsunday) ctch 404s on delete and redir to not found page
            return throwError(err);
      }
    }));
  }

  getValidationError(errors): string {
    return '';
  }
}
