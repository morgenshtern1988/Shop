import api from './common';
import {IAddProduct} from "../types/inrerface";

export const fetchGetProducts = async (currentPage: number): Promise<any> => {
    const {data} = await api.get(`/printing-edition?page=${currentPage}`);
    return {data};
};
export const getAdminProducts = async (currentPage: number): Promise<any> => {
    const {data} = await api.get(`/admin/printing-edition?page=${currentPage}`);
    return {data};
};

export const sortProduct = async ({target, currentPage}: any) => {
    const {data} = await api.post(`/printing-edition/sort-filter?page=${currentPage}`, {
        value: target,
    });
    return {data}
};

export const sortOnCategoryAndPrice = async ({stateObj, currentPage}: any) => {
    const {data} = await api.post(`/printing-edition/sort-category?page=${currentPage}`, {
        ...stateObj
    });
    return {data}
};


export const deleteProduct = async (id: string): Promise<any> => {
    const {data} = await api.delete("/admin/printing-edition/" + id);
    return data
};


export const fetchAddNewProduct = async (product: IAddProduct) => {
    console.log("зашел в сервис");
    const {data} = await api.post("/admin/printing-edition/create", {
        ...product
    });
    // console.log("Data of DB:", data);
    return data;
};
