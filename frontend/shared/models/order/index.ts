export interface Orders {
    user_id: String;
    items: Array<OrderItem>;
    transaction_id: string;
    amount: number;
}
export interface IOrder {
    amount: number,
    createData: string,
    items: Array<OrderItem>,
    transaction_id: string,
    user_id: string,
}

export interface OrderItem {
    printing_edition_id: string;
    count: number;
    price: number;
    currency: string;
}

export interface getOrders {
    user_id: string;
}

export interface OrderTable {
    _id: string,
    amount: number,
    items: Array<any>,
    transaction_id: string,
    user_id: string,

}

// export interface Payment {
//     transaction_id: string;
// }
//
// export interface OrderResponseModel {
//     count: number;
//     data: Array<Orders>
// }
