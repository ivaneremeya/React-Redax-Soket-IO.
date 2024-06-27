export interface IPreviewImage {
    id: number;
    url: string;
    name: string;
}

export interface IUser {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    numberRoom: number;
    institute: string;
    fio: string;
    dorm: { id: number; dorm: string };
    preview: null | IPreviewImage;
}

export interface IAuthResponse {
    jwt: string;
    user: IUser;
}

export interface IRegisterProps {
    email: string;
    fio: string;
    dorm: number;
    numberRoom: string;
    institute: string;
    username: string;
    password: string;
}

export interface ILoginProps {
    password: string;
    identifier: string;
}
