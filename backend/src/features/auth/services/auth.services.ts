import {IUser} from "../../user/api";
import {authenticateUser} from "../repositories/authRepositories"

export const loginUser = async (user: IUser) => {
    try {
        return await authenticateUser(user)

    } catch (err) {
        throw new Error(err.message)
    }
};
