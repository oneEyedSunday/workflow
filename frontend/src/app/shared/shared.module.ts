import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { guards } from './guards';
import { pipes } from './pipes';
import { LoaderComponent } from './loader.component';
import { StatusBadgeComponent } from './status-badges.component';

@NgModule({
  declarations: [
    LoaderComponent,
    StatusBadgeComponent,
    ...pipes
  ],
  imports: [
    CommonModule
  ],
  providers: [
    // TODO import intecertors
  ],
  exports: [
    // TODO install bootstrap fontawesome
    LoaderComponent,
    StatusBadgeComponent,
    ...pipes
  ]
})
export class SharedModule { }
