import api from './common';

export const fetchLPostLogin = async (data: any): Promise<any> => {
    const dataRes = await fetch("http://localhost:8888/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return dataRes
};

export const fetchGetInfoUser = async (): Promise<any> => {
    const {data} = await api.get('/auth/getUserInfo');
    return data;
};
