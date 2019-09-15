import { Task, Document, Group } from '@shared/interfaces';

export interface IUser {
    id?; number;
    first_name: string;
    last_name: string;
    email: string;
    date_of_birth: any;
    address: string;
    state: string;
    gender: any;
    phone_number: string;
    profile_pic: any;
    password?: string;
    tasks_to_user?: Task[];
    userdocuments?: Document[];
    userformresponse?: any[]; // TODO make form response & interface
    usergroups?: { grp: string; id: number }[];
    hasPrivilege?: boolean;
    isAdmin?: boolean;
}

export interface IUserRegisteration {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone_number: string;
}
