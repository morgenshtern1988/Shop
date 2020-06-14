import {Orders} from "../api";
import {ordersModel} from "../../../dataAccess/entityModels/order";

export const orderRepositories = async (order: Orders) => {
    return await ordersModel.create(order)
};
