import api from './common';

export const fetchGetProducts = async (): Promise<any> => {
    const {data} = await api.get('/printing-edition');
    return {data};
};


export const deleteProduct = async (id: string): Promise<any> => {
    const {data} = await api.delete("/admin/printing-edition/" + id);
    return data
};
