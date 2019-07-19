import { Component, OnInit } from '@angular/core';

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

}
