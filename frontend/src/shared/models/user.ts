export interface IResetPassword {
    id: string;
    oldPassword: string;
    newPassword: string;
}

export interface IRegisterUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    confirmationCode: string,
    loading: boolean,
    info: string,

}

export interface IAuth {
    firstName: string,
    lastName: string,
    role: number,
    email: string,
    password: string,
    loading: boolean,
    token: string,
    error: string,
    _id: string,
    isAuthenticated: boolean,
}


export interface IUser {
    userArr: Array<any>
}
