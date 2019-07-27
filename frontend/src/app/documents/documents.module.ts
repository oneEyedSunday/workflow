import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { services } from './services';
import { containers } from './containers';
import { DocumentsRoutingModule } from './documents-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ...containers
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    DocumentsRoutingModule,
    SharedModule
  ],
  providers: [...services]
})
export class DocumentsModule { }
