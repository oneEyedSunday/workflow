import { GroupsService } from './groups.service';
import { UsersService } from './users.service';

export const services: any[] = [
    GroupsService,
    UsersService
];

export * from './groups.service';
export * from './users.service';

