import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbModalModule,
  NgbDropdownModule
} from '@ng-bootstrap/ng-bootstrap';

import { guards } from '@shared/guards';
import { AuthInterceptor, AuthService } from '@shared/auth';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HttpErrorHandler } from '@shared/http-error-handler.service';
import { AppComponent } from './app.component';
import * as CoreLayout from './core';
import { ScriptLoaderService } from './core/script-loader.service';
import { ErrorInterceptor } from '@shared/interceptors/jwtError.interceptor';
// TODO angular-calendar or full-calendar 4 dashboard
// TODO ng bootstraps toast looks good for projects page at least
// TODO may need to import quill here
@NgModule({
  declarations: [
    AppComponent,
    ...CoreLayout.layoutCmps
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbModalModule,
    NgbDropdownModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      closeButton: true,
      preventDuplicates: true,
      tapToDismiss: true, // since im using this for error notifs only
      positionClass: 'toast-top-center'
    })
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    ScriptLoaderService,
    ...guards,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
