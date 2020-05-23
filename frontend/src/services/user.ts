import api from "./common";

export const fetchGetUser = async (): Promise<any> => {
    const {data} = await api.get("/admin/user");
    return data
};


export const getConfigEmail = async (id: any) => {
    const res = await fetch(`http://localhost:8888/auth/email/confirm/${id.id}`)
    return res.json()
};
