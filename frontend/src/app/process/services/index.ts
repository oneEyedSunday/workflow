import { ProcessService } from './process.service';
import { StageService } from './stage.service';
import { TaskService } from './task.service';

export const services: any[] = [
    ProcessService,
    StageService,
    TaskService
];

export * from './process.service';
export * from './stage.service';
export * from './task.service';
