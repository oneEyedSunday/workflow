import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from './forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
