import { IUser } from './user';

export interface IGroup {
  id: number;
  organization: number;
  group_name: string;
  description: string;
  usertogroups: IUser[];
  hasPrivilege: boolean;
}


export class Group implements IGroup {
  constructor(groupObj?: Partial<IGroup>) {
    if (groupObj) {
      this.description = groupObj.description;
      this.group_name = groupObj.group_name;
      this.hasPrivilege = groupObj.hasPrivilege;
    }
  }
  id;
  organization;
  hasPrivilege;
  group_name;
  description;
  usertogroups: IUser[];
}
