import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as DocumentContainers from './containers';
import { RoleGuard } from '@shared/guards';


const routes: Routes = [
  { path: 'new', component: DocumentContainers.CreateUpdateComponent, data: { edit: false }, canActivate: [RoleGuard] },
  { path: 'view/:documentId', component: DocumentContainers.ViewComponent },
  { path: '', component: DocumentContainers.ListComponent },
  { path: '/:documentId/edit', component: DocumentContainers.CreateUpdateComponent, data: { edit: true }, canActivate: [RoleGuard] },
  { path: '/:documentId', component: DocumentContainers.ViewComponent },
];

// TODO() new doc -> upload, rich text

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
