import {userModel} from "../dataAccess/entityModels/user";
import {NextFunction, Request, Response} from "express";

export const controllerRole = async (request: Request, response: Response, next: NextFunction) => {
    if (request.user) {
        console.log(request.user);
        const userInfo = request.user;
        const userInDB = await userModel.findOne({_id: userInfo.id});
        if (userInDB) {
            const user = {
                firstName: userInDB.firstName,
                lastName: userInDB.lastName,
                email: userInDB.email,
                role: userInDB.role,
            };
            const currentUser = JSON.stringify(user);
            response.setHeader("InfoUser", currentUser);
            next()
        } else response.send("User does not exist").status(401);
    } else {
        response.send("Ошибка")
        next()
    }
};
