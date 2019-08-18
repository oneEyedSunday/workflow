import { Task } from './task';

interface IStage {
    name: string;
    tasks?: Task[];
    process: number;
    order: string;
    isComplete: boolean;
    id?: number;
    user: number;
}

export class Stage implements Partial<IStage> {
    name;
    tasks;
    user;
    order;
    process;
    isComplete;
    id;
    constructor(initObj?: Partial<IStage>) {
        this.name = initObj ? initObj.name : '';
        this.tasks = initObj ? initObj.tasks : [];
        if (initObj && initObj.order) {
            this.order = initObj.order;
        }
    }
}
