import {IUser} from "../../user/api";
import {authenticateUser} from "../repositories/authRepositories"
import {response} from "express";

export const loginUser = async (user: IUser) => {
    try {
        if (Object.keys(user).length !== 0) {
            return await authenticateUser(user)
        } else {
            throw new Error("request undefined")
        }
    } catch (e) {
        return response.sendStatus(200)
    }
};
