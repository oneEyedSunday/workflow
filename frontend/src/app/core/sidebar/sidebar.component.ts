import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@shared/auth';
import { AuthorizationAwareComponent as WithAuth } from '@shared/authorization-aware.component';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent extends WithAuth implements OnInit {

    constructor(authSvc: AuthService) {
        super(authSvc);
    }

    ngOnInit() {

    }

}
