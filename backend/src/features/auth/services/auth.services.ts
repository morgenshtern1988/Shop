import {IUser} from "../../user/api";
import {authenticateUser} from "../repositories/authRepositories"

export const loginUser = async (user: IUser) => {
    console.log("BODY:", user);
    // console.log("BODY LENGTH:", Object.keys(user).length);
    try {
        // if (Object.keys(user).length !== 0) {
        await authenticateUser(user)
        // } else {
        //     return new Error("request undefined")
        // }
    } catch (e) {
        throw  new Error(e)
    }
};
