import api from './common';

export const fetchLPostLogin = async (dataObj: any): Promise<any> => {
    const {data} = await api.post("http://localhost:8888/auth/login", {
        email: dataObj.email, password: dataObj.password
    })
    return data
};

export const fetchGetInfoUser = async (): Promise<any> => {
    const {data} = await api.get('/auth/getUserInfo');
    return data;
};

export const fetchPostRegister = async (url: string, data: any) => {
    return await fetch(url, {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
};
