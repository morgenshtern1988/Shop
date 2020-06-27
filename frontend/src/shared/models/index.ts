import {IProduct} from "./product";

export interface IAuthor {
    pager: any,
    pageOfItems: Array<any>,
    authorsArr: Array<any>
    newAuthor: string,
}

export interface IActive {
    blockCategory: boolean,
    listProfile: boolean,
    dashboard: boolean,
    blockStatus: boolean,
}

export interface IModal {
    idShowModalBasket: boolean,
    showAddAuthor: boolean,
    showAddProduct: boolean,
    showModalStripe: boolean,
}

export interface IRedirect {
    _id: string,
    redirect: boolean,
    product: IProduct,
}






