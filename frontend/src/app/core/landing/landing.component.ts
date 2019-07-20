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
        head.appendChild(this.createLinkTag());
    }

    private createLinkTag(): HTMLLinkElement {
        const styleTag = document.createElement('style');
        const linkTag = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.href = 'assets/styles/landing-cover.css';
        linkTag.id = 'landing__page--cover';
        return linkTag;
    }

    ngOnDestroy(): void {
        // remove stylesheet
        const head = document.head || document.getElementsByTagName('head')[0];
        head.removeChild(head.querySelector('link#landing__page--cover'));
    }

}
