import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as FormContainers from './containers';

const routes: Routes = [
  { path: 'new', component: FormContainers.CreateUpdateComponent, data: { edit: false } },
  { path: '', component: FormContainers.ListComponent },
  { path: ':formId/edit', component: FormContainers.CreateUpdateComponent, data: { edit: true } },
  { path: ':formId', component: FormContainers.ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
