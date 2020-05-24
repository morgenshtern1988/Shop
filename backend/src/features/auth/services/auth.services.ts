import {IUser} from "../../user/api";
import {authenticateUser} from "../repositories/authRepositories"
import createError from "http-errors"

export const loginUser = async (user: IUser) => {
    console.log("BODY:", user);
    try {
        await authenticateUser(user)

    } catch (err) {
        throw new Error(err.message)
    }
};
