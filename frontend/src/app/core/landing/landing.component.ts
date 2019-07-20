import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() {
        // check auth status??
        // inject css into head
        const head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(this.createStyle());
    }

    private createStyle() {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = require('../../../assets/styles/landing-cover.css');
        styleTag.id = 'landing__page--cover';
        return styleTag;
    }

    ngOnDestroy(): void {
        // remove stylesheet
        const head = document.head || document.getElementsByTagName('head')[0];
        head.removeChild(head.querySelector('#landing__page--cover'));
    }

}
