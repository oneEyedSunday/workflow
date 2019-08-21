import { IUser } from './user';
import { IGroup } from './group';
import { IForm } from './form';
import { Document } from './document';
import { Stage } from './stage';

interface ITask {
    id?: number;
    summary: string;
    users?: IUser[];
    isComplete: boolean;
    user: number;
    groups?: IGroup[];
    form?: IForm;
    document?: Document;
    stage?: Stage;
}


export class Task implements ITask {
    id;
    user;
    summary;
    status;
    users;
    groups;
    isComplete;
    form;
    document;
    stage;
    constructor(initObj?: ITask) {
        this.summary =  initObj ? initObj.summary : '';
        this.users = initObj ? initObj.users : [];
        this.groups = initObj ? initObj.groups : [];
        this.form = initObj ? initObj.form : null;
        this.stage = initObj ? initObj.stage : new Stage();
        this.document = initObj ? initObj.document : null;
        this.id = initObj ? initObj.id : null;
    }
}
