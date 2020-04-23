import {Response, Request, NextFunction} from "express";
import {userRoleType} from "../dataAccess/emuns/userRoleType";

export const PermissionMiddleware = (roles: userRoleType[]) => async (request: Request, response: Response, next: NextFunction) => {
    const userInfo = request.user;
    if (!roles.includes(userInfo.role)) {
        response.status(403).send('Access denied');
    } else {
        next()
    }
};
