export interface IAuth {
    isAuthenticated: boolean,
}

export interface RootState {
    loginReducer: IAuth,
    registerReducer: IRegisterUser,
}

export interface IRegisterUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    confirmationCode: string,

}

/* export interface login {
 email: string,
 password: string,
 loading: boolean,
 token: string,
 error: string,
 isAuthenticated: boolean,
}

export interface RootState {
 loginReducer: login,
}*/
