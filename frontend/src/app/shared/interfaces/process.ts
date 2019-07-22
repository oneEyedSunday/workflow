import { Stage } from './stage';
import { Task } from './task';

interface IProcess {
    processsId?: number;
    stages: Stage[];
    name: string;
    lastUpdatedAt: string;
}

export class Process implements IProcess {
    name: string;
    stages;
    processId;
    lastUpdatedAt;
    constructor() {
        this.name = 'Demo Process';
        this.stages = [
            new Stage({ name: 'Demo Stage', tasks: [ new Task(), new Task() ] }),
            new Stage({ name: 'Stage 2', tasks: [] })
        ];
        this.lastUpdatedAt = new Date(Date.now() - 250000 * Math.random() * 10 * Math.random() * 100);
    }
}
