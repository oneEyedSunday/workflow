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
} from '@ng-bootstrap/ng-bootstrap'; // trim imports

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as CoreLayout from './core';
// TODO import interceptors
// TODO angular-calendar or full-calendar 4 dashboard
// TODO toastr for notifs?
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
