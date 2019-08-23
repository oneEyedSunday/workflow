export interface IFormConfig {
    className: string;
    label: string;
    name: string;
    subtype: string;
    type: string;
}

export interface IForm {
    config: IFormConfig[];
    description?: string;
    form_name: string;
    formresponse: [];
    formtasks: [];
    id: number;
    organization: number;
    user: number | any;
    user_id: number;
}

export interface IFormResponse {
    created_date: string;
    form: number;
    id: number;
    modified_date: string;
    response?: Record<string, string[]>[];
    user: number;
}
