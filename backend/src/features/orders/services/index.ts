import {Orders} from "../api"
import {orderRepositories} from "../repositories";

export const orderServices = async (order: Orders) => {
    return await orderRepositories(order)
};
