import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@shared/auth';
import { ScriptLoaderService } from '../script-loader.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
    constructor(
        public auth: AuthService,
        public scriptLoader: ScriptLoaderService
        ) { }

    ngOnInit() {
        // inject css into head
        const head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(this.createLinkTag());
        this.scriptLoader.insertAssets();
    }

    private createLinkTag(): HTMLLinkElement {
        const linkTag = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.href = 'https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700';
        linkTag.id = 'landing__page--cover';
        return linkTag;
    }


    loggedIn(): boolean {
        return !!localStorage.getItem('workflow_user_data') && !!localStorage.getItem('workflow_token');
    }

    ngOnDestroy(): void {
        // remove stylesheet
        const head = document.head || document.getElementsByTagName('head')[0];
        head.removeChild(head.querySelector('link#landing__page--cover'));

        this.scriptLoader.removeAssets();
    }

}
