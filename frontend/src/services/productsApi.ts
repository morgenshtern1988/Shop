import api from './common';

export const fetchGetProducts = async (): Promise<any> => {
    const {data, headers} = await api.get('/printing-edition');
    console.log(headers);
    return {data, headers};
};
