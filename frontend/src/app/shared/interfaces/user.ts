export interface IUser {
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
}

export interface IUserRegisteration {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone_number: string;
}
