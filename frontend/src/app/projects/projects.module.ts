import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  declarations: [
    // TODO install dragula
    ...fromComponents.components,
    ...fromContainers.containers
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  providers: [
    ...fromServices.services
  ]
})
export class ProjectsModule { }
