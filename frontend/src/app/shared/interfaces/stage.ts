import { Task } from './task';

interface IStage {
    name: string;
    tasks: Task[];
}

export class Stage implements IStage {
    name;
    tasks;
    constructor(initObj?: IStage) {
        this.name = initObj ? initObj.name : 'Demo Stage';
        this.tasks = initObj ? initObj.tasks : [];
    }
}
