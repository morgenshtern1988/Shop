import {IUser} from "../../user/api";
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
      return response.sendStatus(200)
    }
};


import appJwt from "../../../config/app"
import * as jwt from "jsonwebtoken"
import {tokenModel} from "../../../dataAccess/entityModels/tokien";
import {updateTokens} from "../repositories/authRepositories";
