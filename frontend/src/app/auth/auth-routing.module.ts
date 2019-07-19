import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as Views from './forms';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'signin', component: Views.LoginComponent},
      {path: 'signup', component: Views.RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
