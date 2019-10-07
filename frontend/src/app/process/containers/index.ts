import { ListComponent } from './list.component';
import { ViewComponent } from './view.component';
import { TrackerComponent as ThesisTracker } from './tracker';

export const containers: any[] = [
    ListComponent,
    ViewComponent,
    ThesisTracker
];

export * from './view.component';
export * from './list.component';
export * from './tracker';
