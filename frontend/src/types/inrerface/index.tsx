export interface IAuth {
    firstName: string,
    lastName: string,
    role: number,
    email: string,
    password: string,
    loading: boolean,
    token: string,
    error: string,
    isAuthenticated: boolean,
}

export interface RootState {
    loginReducer: IAuth,
    registerReducer: IRegisterUser,
    productReducer: IProduct,
}

export interface IRegisterUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    confirmationCode: string,

}

export interface IProduct {
    name: string,
    description: string,
    currency: string,
    cover_image: string,
    type: string,
    price: number,
    removes_at: boolean,
}