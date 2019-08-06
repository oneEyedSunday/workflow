import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { services } from './services';
import { containers } from './containers';
import { components } from './components';
import { OrganizationRoutingModule } from './organization-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        ...containers,
        ...components
    ],
    imports: [
        CommonModule,
        FormsModule,
        OrganizationRoutingModule,
        SharedModule
    ],
    providers: [
        ...services
    ]
})
export class OrganizationModule { }

