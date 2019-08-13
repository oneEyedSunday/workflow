import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { DragulaModule } from 'ng2-dragula';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsRoutingModule } from './projects-routing.module';
import { TimeAgoPipe } from 'time-ago-pipe';
import { SharedModule } from '@shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    QuillModule.forRoot(),
    DragulaModule.forRoot(),
    NgbDropdownModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  providers: [
    ...fromServices.services
  ]
})
export class ProjectsModule { }
