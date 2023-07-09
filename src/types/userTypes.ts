export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserLoginForm extends IUserLogin {
    rememberMe: boolean;
}

export interface IUserRegister {
    userName: string;
    email: string;
    password: string;
}

export interface IUser {
    _id: string;
    userName: string;
    email: string;
    address?: string;
    avatarURL?: string;
    createdAt: string;
}

export interface IUserResponse {
    user: IUser;
    token: string;
    message: string;
}

export interface ILoginByTokenResponse {
    user: IUser;
    message: string;
}
