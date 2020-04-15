"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    appPort: "7227",
    jwt: {
        secret: "SUPER_SECRET_TOKEN",
        tokens: {
            access: {
                type: "access",
                expiresIn: "1m",
            },
            refresh: {
                type: "refresh",
                expiresIn: "24h",
            }
        }
    }
};
//# sourceMappingURL=app.js.map