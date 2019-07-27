import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { guards } from './guards';
import { pipes } from './pipes';
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [
    LoaderComponent,
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
    ...pipes
  ]
})
export class SharedModule { }
