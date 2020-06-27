import {IOrder} from "./order";

export interface IModelProduct {
    _id: string,
    name: string,
    description: string,
    currency: string,
    cover_image: string,
    type: string,
    price: number,
    removes_at: boolean,
}

export interface IType {
    Book: boolean,
    Newspapers: boolean,
    Magazines: boolean,
}

export interface IAddProduct {
    name: string,
    description: string,
    type: string,
    author_ids: Array<any>,
    price: number,
    currency: string,
    cover_image: any,
    countName: number,
    countDescription: number,
    authorSelect: any,
}


export interface IParamSort {
    low: number,
    high: number,
    type: any,
    click: any,
}

export interface IProduct {
    productArr: Array<any>,
    stateProduct: IAddProduct,
    paramSort: IParamSort,
    paramFilter: string,
}
export interface IBasket {
    productArr: any,
    totalPrice: number,
    totalCount: number,
    orders: Array<IOrder>
}

