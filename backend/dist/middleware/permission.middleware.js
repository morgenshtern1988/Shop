"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionMiddleware = (roles) => async (request, response, next) => {
    const userInfo = request.user;
    if (!roles.includes(userInfo.role)) {
        response.status(403).send('Access denied');
    }
    else {
        next();
    }
};
//# sourceMappingURL=permission.middleware.js.map