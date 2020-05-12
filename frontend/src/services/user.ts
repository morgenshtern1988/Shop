import api from "./common";

export const fetchGetUser = async ():Promise<any>=>{
    const {data} = await api.get("/admin/user");
    return data
};
