import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { DragulaModule } from 'ng2-dragula';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsRoutingModule } from './projects-routing.module';
import { TimeAgoPipe } from 'time-ago-pipe';
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
    QuillModule.forRoot(),
    DragulaModule.forRoot(),
    NgbDropdownModule,
    ProjectsRoutingModule
  ],
  providers: [
    ...fromServices.services
  ]
})
export class ProjectsModule { }
