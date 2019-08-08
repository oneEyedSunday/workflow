import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/auth';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    public organization = {
        name: 'Workflow #1'
    };
    constructor() { }

    ngOnInit() {

    }

    logout() {
        AuthService.logout();
    }

}
