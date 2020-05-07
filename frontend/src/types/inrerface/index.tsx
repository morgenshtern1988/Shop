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
    filterReducer: IProduct,
    loginReducer: IAuth,
    registerReducer: IRegisterUser,
    productReducer: IProduct,
    redirectReducer: IRedirect,
    modalReducer: IModal;
    buyReducer: IBasket,
    isActiveReducer: IActive,
    authorsReducer: IAuthor,
}

interface IAuthor {
    authorsArr: Array<object>
    newAuthor: string,
}

interface IActive {
    blockCategory: boolean,
    listProfile: boolean,
    dashboard: boolean,
}

export interface IBasket {
    productArr: any,
    totalPrice: number,
    totalCount: number,
}

export interface IModal {
    idShowModalBasket: boolean,
    showAddAuthor: boolean,
}

export interface IRedirect {
    _id: string,
    redirect: boolean,
    product: IProduct,
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
    _id: string,
    name: string,
    description: string,
    currency: string,
    cover_image: string,
    type: string,
    price: number,
    removes_at: boolean,
}
