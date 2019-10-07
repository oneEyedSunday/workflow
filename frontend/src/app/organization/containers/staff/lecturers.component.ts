import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScriptLoaderService } from '../../../core/script-loader.service';
import * as feather from 'feather-icons';

@Component({
    selector: 'app-staff',
    templateUrl: './lecturers.component.html',
    styleUrls: [
      './lecturers.component.scss'
    ]
})
export class LecturersComponent implements OnInit, OnDestroy {

    constructor(private scriptLoader: ScriptLoaderService) { }

    ngOnInit() {
      this.initFeather();
      this.scriptLoader.insertAssets();
    }

    initFeather(): void {
      Promise.resolve().then(() => {
        feather.replace();
        (window as any).feather.replace();
      });
      feather.replace();

      setTimeout(() => (window as any).feather.replace(), 30);
    }

    ngOnDestroy() {
      this.scriptLoader.removeAssets();
    }

}
