import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScriptLoaderService } from '../../../core/script-loader.service';
import * as feather from 'feather-icons';

interface Thesis {
  researcher: string;
  supervisor: string;
  due?: string;
  program: string;
  stage: number;
  color: string;
}

const projects: Thesis[] = [
  {
    researcher: 'John Adegboyega',
    supervisor: 'Dr. Rufai',
    due: 'January, 2020',
    program: 'M.Sc',
    stage: 80,
    color: 'color-1'
  },
  {
    researcher: 'Kevin Duisi',
    supervisor: 'Prof. C. Uwadia',
    due: 'January, 2020',
    program: 'M.Sc',
    stage: 70,
    color: 'color-5'
  },
  {
    researcher: 'Miss Aminat Dauda',
    supervisor: 'Dr. Oladeji',
    due: 'January, 2020',
    program: 'M.Sc',
    stage: 90,
    color: 'color-7'
  },
  {
    researcher: 'Isiaka Adio',
    supervisor: 'Dr. Fashina',
    due: 'January, 2020',
    program: 'M.Sc',
    stage: 60,
    color: 'color-1'
  },
  {
    researcher: 'Suleiman Isaa',
    supervisor: 'Dr. Fashina',
    due: 'January, 2020',
    program: 'M.Sc',
    stage: 30,
    color: 'color-3'
  },
  {
    researcher: 'George West',
    supervisor: 'Dr. Azeez',
    due: 'September, 2020',
    program: 'PgD',
    stage: 40,
    color: 'color-1'
  },
  {
    researcher: 'Lawrence Stephen',
    supervisor: 'Dr. Azeez',
    due: 'September, 2020',
    program: 'PgD',
    stage: 40,
    color: 'color-2'
  }
];

@Component({
    selector: 'app-tracker',
    templateUrl: './tracker.component.html',
    styles: [
      `
        :host {
          display: block;
          margin: 0 -24px;
        }

        .percentage { padding: 0 }

        .progress-table .percentage {
          padding-right: 0;
          width: 30%;
        }

        .progress-table .table-row .country,
        .progress-table .table-row .visit, .progress-table .table-row .percentage {
          justify-content: center
        }
      `
    ]
})
export class TrackerComponent implements OnInit, OnDestroy {
    theses: Thesis[] = [...projects];
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

    getWidthFromStage(stage: number): string {
      return `width: ${stage || 0}%`;
    }

    ngOnDestroy() {
      this.scriptLoader.removeAssets();
    }

}
