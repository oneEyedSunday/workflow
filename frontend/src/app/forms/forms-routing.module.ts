import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '@shared/guards';
import * as FormContainers from './containers';

const routes: Routes = [
  { path: 'new', component: FormContainers.CreateUpdateComponent, data: { edit: false }, canActivate: [RoleGuard] },
  { path: 'view/:formId', component: FormContainers.ViewFormComponent },
  { path: '', component: FormContainers.ListComponent },
  { path: ':formId', component: FormContainers.CreateUpdateComponent, data: { edit: true }, canActivate: [RoleGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
