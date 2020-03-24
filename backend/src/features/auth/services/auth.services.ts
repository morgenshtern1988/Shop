import {IUser} from "../../../types/interface/user";
import {registerUser, authenticateUser} from "../repositories/authRepositories"

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

export const loginUser = async (user: IUser) => {
    if (user) {
        return await authenticateUser(user)
    }
    return "Request undefined"
};
