import api from "./common";
import {IResetPassword} from "../types/inrerface/user";

export const fetchGetUser = async (): Promise<any> => {
    const {data} = await api.get("/admin/user");
    return data
};


export const getConfigEmail = async (id: any) => {
    const res = await fetch(`http://localhost:8888/auth/email/confirm/${id.id}`);
    return res.json()
};

export const resetPassword = async (user: IResetPassword) => {
    const data = await api.post(`http://localhost:8888/auth/reset-password`, {...user});
    console.log(data);
    // return data
};
