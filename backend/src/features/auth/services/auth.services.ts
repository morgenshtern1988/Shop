import {IResetPassword, IUser} from "../../user/api";
import {authenticateUser, reposResetPassword} from "../repositories/authRepositories"

export const loginUser = async (user: IUser) => {
    try {
        return await authenticateUser(user)

    } catch (err) {
        throw new Error(err.message)
    }
};

export const servicesResetPassword = async (user: IResetPassword) => {
    try {
        return reposResetPassword(user)
    } catch (err) {
        throw new Error(err.message)
    }
};
