import {adminShowUser} from "../repositories";

export const showUser = async ()=>{
    return await adminShowUser()
};
