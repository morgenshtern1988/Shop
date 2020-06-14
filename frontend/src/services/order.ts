import api from "./common";
import {Orders} from "../../shared/models/order";

export const asyncCreateOrder = async (order: Orders): Promise<any> => {
    const {data} = await api.post(`/order`, {...order});
    return {data};
};
