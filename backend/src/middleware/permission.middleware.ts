import {Response, Request, NextFunction} from "express";
import {userRoleType} from "../dataAccess/emuns/userRoleType";

export const PermissionMiddleware = (roles: userRoleType[]) => async (request: Request, response: Response, next: NextFunction) => {
    const userInfo = request.user;
    if (!roles.includes(userInfo.role)) {
        response.status(403).send('Access denied');
    } else {
        /* const user = await userModel.findOne({_id: userInfo.id});
         // if (user) {
         const currentUser = {
             firstName: user.firstName,
             lastName: user.lastName,
             email: user.email,
             role: user.role,
         };
         const a = JSON.stringify(currentUser);
         request.header("info");*/
        // request.header(a);
        // response.header(currentUser);
        // }
        //по ид беру юзера и отправляю его на фронте, и там уже делаю из аутентификейшн тру
        //добавляю полученого юзера с стор с ролью
        next()
    }
};
