"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    appPort: "8888",
    jwt: {
        secret: "SUPER_SECRET_TOKEN",
        tokens: {
            access: {
                type: "access",
                expiresIn: "60m",
            },
            refresh: {
                type: "refresh",
                expiresIn: "7200h",
            }
        }
    }
};
//# sourceMappingURL=app.js.map