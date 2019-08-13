import { Stage } from './stage';
import { Task } from './task';

interface IProcess {
    id?: number;
    stages: Stage[];
    process_name: string;
    organizationId: number;
    description: string;
    lastUpdatedAt: string;
    isComplete?: boolean;
    status: string; // TODO (oneeyedsunday) convert to enums
}

export class Process implements IProcess {
    process_name: string;
    stages: Stage[];
    id;
    description;
    organizationId;
    lastUpdatedAt;
    status;
    constructor() {
        this.process_name = 'Demo Process';
        this.stages = [];
        this.status = Math.random() > 0.46 ? 'In progress' : 'Complete';
        this.description = Array(40).fill('a');
        this.lastUpdatedAt = new Date(Date.now() - 250000 * Math.random() * 10 * Math.random() * 100);
    }
}
