import { Injectable } from '@angular/core';

@Injectable()
export class ScriptLoaderService {
    loadAPI: Promise<any>;

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
                '/assets/home/js/jquery.counterup.min.js',
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

}
