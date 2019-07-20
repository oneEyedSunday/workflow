import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export const DashboardRoutes: Routes = [
    {
      path: '', component: DashboardComponent,
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}



