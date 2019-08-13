import { ProcessService } from './projects.service';
import { StageService } from './stage.service';

export const services: any[] = [
    ProcessService,
    StageService
];

export * from './projects.service';
export * from './stage.service';
