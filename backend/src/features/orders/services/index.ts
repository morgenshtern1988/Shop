import {getOrders, Orders} from "../api"
import {getOrderRepositories, orderRepositories} from "../repositories";

export const orderServices = async (order: Orders) => {
    return await orderRepositories(order)
};

export const getOrdersServices = async (id: getOrders) => {
    return await getOrderRepositories(id)
};
