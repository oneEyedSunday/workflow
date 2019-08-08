import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LandingComponent, AuthLayoutComponent } from './core';
import { AuthGuard } from '@shared/guards';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'account',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.WorkflowFormsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'documents',
        loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule)
      },
      {
        path: 'organizations',
        loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
