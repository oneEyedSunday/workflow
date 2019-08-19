import { IUser } from './user';

export interface IGroup {
  id: number;
  organization: number;
  group_name: string;
  description: string;
  usertogroups: IUser[];
}


export class Group implements IGroup {
  constructor(groupObj?: Partial<IGroup>) {
    if (groupObj) {
      this.description = groupObj.description;
      this.group_name = groupObj.group_name;
    }
  }
  id;
  organization;
  group_name;
  description;
  usertogroups: IUser[];
}
