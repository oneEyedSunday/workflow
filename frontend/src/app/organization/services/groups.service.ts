import { Injectable } from '@angular/core';
import { IGroup, Group } from '@shared/interfaces';

@Injectable()
export class GroupsService {
    fetchGroups() {}

    fetchGroup(groupId: number) {}

    createGroup(group: IGroup) {}

    updateGroup(groupId: number, group: Group) {}
}
