import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '@shared/guards';
import * as Containers from './containers';


const routes: Routes = [
  { path: 'groups/new', component: Containers.GroupCreateUpdateComponent, data: { edit: false }, canActivate: [RoleGuard] },
  { path: 'groups', component: Containers.GroupListComponent },
  { path: 'groups/:groupId', component: Containers.SingleGroupViewComponent, data: { edit: true } },
  { path: 'groups/:groupId/edit', component: Containers.GroupCreateUpdateComponent, data: { edit: true }, canActivate: [RoleGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
