import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@shared/auth';
import { ScriptLoaderService } from '../script-loader.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

    styleAssets = [
        'css/linearicons.css',
        'css/font-awesome.min.css',
        // 'css/bootstrap.css',
        'css/magnific-popup.css',
        // 'css/jquery-ui.css',
        'css/nice-select.css',
        'css/animate.min.css',
        'css/owl.carousel.css',
        'css/main.css'
    ];
    constructor(
        public auth: AuthService,
        public scriptLoader: ScriptLoaderService
        ) { }

    ngOnInit() {
        // inject css into head
        const head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(this.createLinkTag());
        this.insertAssets();
    }

    private createLinkTag(): HTMLLinkElement {
        const linkTag = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.href = 'https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700';
        linkTag.id = 'landing__page--cover';
        return linkTag;
    }

    private insertAssets(): void {
        const fragment = document.createDocumentFragment();
        for (const href of this.styleAssets) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link['data-meta'] = 'custom';
            link.href = `/assets/home/${href}`;
            fragment.appendChild(link);
        }
        const head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(fragment);
    }

    ngOnDestroy(): void {
        // remove stylesheet
        const head = document.head || document.getElementsByTagName('head')[0];
        head.removeChild(head.querySelector('link#landing__page--cover'));

        document.querySelectorAll('link[data-meta="custom"]').forEach(customLink => {
            customLink.remove();
        });
    }

}
