import api from './common';

export const fetchGetProducts = async (): Promise<any> => {
    const {data, headers} = await api.get('/printing-edition');
    // console.log(headers);
    return {data, headers};
};


export const deleteProduct = async (id:string): Promise<any> => {
    const {data} = await api.delete("http://localhost:8888/admin/printing-edition/" + id);
    return data
};
