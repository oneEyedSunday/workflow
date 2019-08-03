import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { services } from './services';
import { containers } from './containers';
import { DocumentsRoutingModule } from './documents-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FileUploadModule } from 'ng2-file-upload';
import { CloudinaryModule,
  CloudinaryConfiguration, provideCloudinary } from '@cloudinary/angular-5.x';
import { AppConfig } from '../../environments/environment';

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
    FileUploadModule,
    CloudinaryModule,
    SharedModule
  ],
  providers: [
    ...services,
    provideCloudinary(require('cloudinary-core'), AppConfig.CLOUDINARY as CloudinaryConfiguration)
  ]
})
export class DocumentsModule { }
