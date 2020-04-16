import api from './common';

export const fetchGetProducts = async (): Promise<any> => {
    const {data} = await api.get('/admin/printing-edition');
    return data;
};
