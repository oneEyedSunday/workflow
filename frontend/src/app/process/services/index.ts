import { ProcessService } from './process.service';
import { StageService } from './stage.service';

export const services: any[] = [
    ProcessService,
    StageService
];

export * from './process.service';
export * from './stage.service';
