import { IUser } from './user';
import { IGroup } from './group';
import { IForm } from './form';
import { Document } from './document';
import { Stage } from './stage';

interface ITask {
    taskId?: number;
    summary: string;
    status: string; // TODO update to enum
    users?: IUser[];
    groups?: IGroup[];
    form?: IForm;
    document?: Document;
    stage?: Stage;
}


export class Task implements ITask {
    taskId;
    summary;
    status;
    users;
    groups;
    form;
    document;
    stage;
    constructor(initObj?: ITask) {
        this.summary =  initObj ? initObj.summary : '';
        this.status = initObj ? initObj.status :  'ongoing';
        this.users = initObj ? initObj.users : [];
        this.groups = initObj ? initObj.groups : [];
        this.form = initObj ? initObj.form : null;
        this.stage = initObj ? initObj.stage : new Stage();
        this.document = initObj ? initObj.document : null;
        this.taskId = initObj ? initObj.taskId : Math.random(); // pseudo till i get proper distinctive
    }
}
