import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
// TODO import pop over and tooltip modules form ngbootstrap
import { FormsRoutingModule } from './forms-routing.module';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    FormsRoutingModule
  ],
  providers: [
    ...fromServices.services
  ]
})
export class WorkflowFormsModule { }
