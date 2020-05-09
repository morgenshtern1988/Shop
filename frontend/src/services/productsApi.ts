import api from './common';
import {IAddProduct} from "../types/inrerface";

export const fetchGetProducts = async (): Promise<any> => {
    const {data} = await api.get('/printing-edition');
    return {data};
};


export const deleteProduct = async (id: string): Promise<any> => {
    const {data} = await api.delete("/admin/printing-edition/" + id);
    return data
};


export const fetchAddNewProduct = async (product: IAddProduct) => {
    const {data} = await api.get("/admin/author/create")
    return data;
};
