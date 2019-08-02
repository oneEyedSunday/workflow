import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = AuthService.getToken();

    if (authToken) {
      req = req.clone({ headers: req.headers.set('Authorization', `Token ${authToken}`) });
    }

    return next.handle(req);
  }

}
