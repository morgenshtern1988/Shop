import {Response, Request, NextFunction} from "express";
import {userRoleType} from "../dataAccess/emuns/userRoleType";

export const PermissionMiddleware = (roles: userRoleType[]) => (request: Request, response: Response, next: NextFunction) => {
    const userInfo = request.user;
    if (!roles.includes(userInfo.role)) {
        response.status(403).send('Access denied');
    } else {
        //по ид беру юзера и отправляю его на фронте, и там уже делаю из аутентификейшн тру
        //добавляю полученого юзера с стор с ролью
        next()
    }
};
