import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardService } from './service';
import { SharedModule } from '@shared/shared.module';
import { DocumentService } from '../documents/services';
import { FormsService } from '../forms/services';

// TODO install a charts & calendar module
export const DashboardRoutes: Routes = [
    {
      path: '', component: DashboardComponent,
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    SharedModule
  ],
  declarations: [DashboardComponent],
  providers: [
    DashboardService,
    DocumentService,
    FormsService
  ]
})
export class DashboardModule {}



