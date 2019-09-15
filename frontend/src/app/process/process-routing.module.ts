import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '@shared/guards';
import * as ProjectContainers from './containers';

const routes: Routes = [
  { path: '', component: ProjectContainers.ListComponent },
  { path: 'new', component: ProjectContainers.ViewComponent, data: { creating: true }, canActivate: [RoleGuard]},
  { path: ':processId', component: ProjectContainers.ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
