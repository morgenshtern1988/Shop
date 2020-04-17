import {userModel} from "../dataAccess/entityModels/user";
import {NextFunction, Request, Response} from "express";

export const controllerRole = async (request: Request, response: Response, next: NextFunction) => {
   // console.log(request.user);
    const userInfo = request.user;
    const user = await userModel.findOne({_id: userInfo.id});
    const currentUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
    };
    response.header(currentUser);
    next()
};
