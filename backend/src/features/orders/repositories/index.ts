import {Orders} from "../api";
import {ordersModel} from "../../../dataAccess/entityModels/order";
//5375414105003817
// const ObjectID = require("mongodb").ObjectID;
export const orderRepositories = async (order: Orders) => {
    console.log("CREATEORD:", order);
    return await ordersModel.create(order)
};

export const getOrderRepositories = async (id: any) => {
    const order = await ordersModel.find({...id}).populate("items.printing_edition_id");
    return order;
};
