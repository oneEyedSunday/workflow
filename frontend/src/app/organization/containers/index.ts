import { GroupListComponent } from './list.component';
import { SingleGroupViewComponent } from './single.component';
import { GroupCreateUpdateComponent } from './create-update.component';
import { LecturersComponent } from './staff';

export const containers: any[] = [
    GroupListComponent,
    SingleGroupViewComponent,
    GroupCreateUpdateComponent,
    LecturersComponent
];

export * from './list.component';
export * from './single.component';
export * from './create-update.component';
export * from './staff';
