import {IUser} from "../../../types/interface/user";
import {registerUser, authenticateUser} from "../repositories/authRepositories"
import {response} from "express";

export const createUser = async (user: IUser) => {
    console.log(user);
    if (!user) {
        return "error"
    } else {
        if (user.password !== "undefined") {
            return await registerUser(user);
        } else {
            return "undefined password"
        }
    }
};
/*interface ILoginUser {
    email:string,
    password:string
}*/
export const loginUser = async (user: IUser) => {
    try {
        if (Object.keys(user).length !== 0) {
            return await authenticateUser(user)
        } else {
            throw new Error("request undefined")
        }
    } catch (e) {
        response.sendStatus(200)
    }
};
