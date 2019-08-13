import { Task } from './task';

interface IStage {
    name: string;
    tasks?: Task[];
    process: number;
    order: number;
    isComplete: boolean;
}

export class Stage implements Partial<IStage> {
    name;
    tasks;
    constructor(initObj?: Partial<IStage>) {
        this.name = initObj ? initObj.name : '';
        this.tasks = initObj ? initObj.tasks : [];
    }
}
