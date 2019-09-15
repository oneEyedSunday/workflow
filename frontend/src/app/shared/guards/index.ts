import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';

export const guards: any[] = [
    AuthGuard,
    RoleGuard
];

export * from './auth.guard';
export * from './role.guard';
