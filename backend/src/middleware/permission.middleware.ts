import {Response, Request, NextFunction} from "express";
import {userRoleType} from "../dataAccess/emuns/userRoleType";

export const PermissionMiddleware = (roles: userRoleType[]) => (request: Request, response: Response, next: NextFunction) => {
    const userInfo = request.user;
    if (!roles.includes(userInfo.role)) return response.status(401).send('Access denied');
    next();
    return 0
};
