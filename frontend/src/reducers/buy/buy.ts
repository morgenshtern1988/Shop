import {asyncGetOrder} from "../../services/order";
import {getOrders} from "../../shared/models/order";

let initialState = {
    productArr: [],
    totalPrice: 0,
    totalCount: 0,
    orders: [],
};

export const buyReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'BUY_PRODUCT':
            let {productArr, totalCount, totalPrice} = action.payload;
            return {
                ...state,
                productArr: productArr,
                totalPrice: totalPrice,
                totalCount: totalCount

            };
        case "ORDERS_USER":
            let {orders} = action.payload;
            return {
                ...state,
                orders
            };
        default:
            return state;
    }
};

export const thunkGetOrders = (id: getOrders) => {
    return async (dispatch: any) => {
        await asyncGetOrder(id)
            .then((data) => dispatch({type: "ORDERS_USER", payload: {orders: data.data}}))
            .catch((err) => console.log(err))

    }
};

