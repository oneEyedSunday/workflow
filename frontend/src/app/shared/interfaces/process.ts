import { Stage } from './stage';
import { Task } from './task';

interface IProcess {
    processsId?: number;
    stages: Stage[];
    name: string;
    organizationId: number;
    description: string;
    lastUpdatedAt: string;
    status: string; // TODO (oneeyedsunday) convert to enums
}

export class Process implements IProcess {
    name: string;
    stages;
    processId;
    description;
    organizationId;
    lastUpdatedAt;
    status;
    constructor() {
        this.name = 'Demo Process';
        this.stages = [
            new Stage({ name: 'Demo Stage', tasks: [ new Task(), new Task() ] }),
            new Stage({ name: 'Stage 2', tasks: [] })
        ];
        this.status = Math.random() > 0.46 ? 'In progress' : 'Complete';
        this.description = Array(40).fill('a');
        this.lastUpdatedAt = new Date(Date.now() - 250000 * Math.random() * 10 * Math.random() * 100);
    }
}
