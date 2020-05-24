import api from './common';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8888';
axios.defaults.headers = {"Content-Type": "application/json"};

export const fetchLPostLogin = async (dataObj: any): Promise<any> => {
    const obj = {email: dataObj.email, password: dataObj.password};
    const data = await axios.post("/auth/login",
        {...obj})
    ;
    console.log("RES:", data)
};
/*export const fetchLPostLogin = async (data: any): Promise<any> => {
    const dataRes = await fetch("http://localhost:8888/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    console.log(dataRes);
};*/
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
