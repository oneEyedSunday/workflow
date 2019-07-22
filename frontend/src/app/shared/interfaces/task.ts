interface ITask {
    taskId?: number;
    summary: string;
    status: string; // TODO update to enum
}


export class Task implements ITask {
    taskId;
    summary;
    status;
    constructor(initObj?: ITask) {
        this.summary = 'Send Reports to HOD';
        this.status = 'ongoing';
        this.taskId = initObj ? initObj.taskId : null;
    }
}
