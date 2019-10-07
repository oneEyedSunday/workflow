import { Injectable } from '@angular/core';

@Injectable()
export class ScriptLoaderService {
    loadAPI: Promise<any>;
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

    constructor() {
        this.loadAPI = new Promise((resolve) => {
            this.loadScript();
            resolve(true);
        });
    }

    public loadScript() {
        let isFound = false;
        const scripts = document.getElementsByTagName('script');

        for (const script of Array.from(scripts)) {
            if (script.getAttribute('src') != null && script.getAttribute('src').includes('loader')) {
                isFound = true;
            }
        }

        if (!isFound) {
            const dynamicScripts = [
                '/assets/home/js/owl.carousel.min.js',
                '/assets/home/js/waypoints.min.js',
                '/assets/home/js/jquery.magnific-popup.min.js',
                '/assets/home/js/jquery.counterup.min.js',
                '/assets/home/js/isotope.pkgd.min.js',
                '/assets/home/js/main.js'
            ];

            for (const script of dynamicScripts) {
                const node = document.createElement('script');
                node.src = script;
                node.type = 'text/javascript';
                node.async = false;
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
    }

    insertAssets(): void {
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

    removeAssets(): void {
        document.querySelectorAll('link[data-meta="custom"]').forEach(customLink => {
            customLink.remove();
        });
    }

}
