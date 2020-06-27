import api from "./common";
import {getOrders, Orders} from "../shared/models/order";

export const asyncCreateOrder = async (order: Orders): Promise<any> => {
    const {data} = await api.post(`/order/create`, {...order});
    return {data};
};

export const asyncGetOrder = async (id: getOrders): Promise<any> => {
    const {data} = await api.post(`/order`, {...id});
    return {data};
};
