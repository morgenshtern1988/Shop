export interface auth {
    isAuthenticated: boolean,
}

export interface RootState {
    loginReducer: auth,
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
