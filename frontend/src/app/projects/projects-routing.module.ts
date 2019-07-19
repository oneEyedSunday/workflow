import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as ProjectContainers from './containers';

const routes: Routes = [
  { path: '', component: ProjectContainers.ListComponent },
  { path: '/:projectId', component: ProjectContainers.ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }