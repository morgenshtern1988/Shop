export default {
    appPort: "8888",
    jwt: {
        secret: "SUPER_SECRET_TOKEN",
        tokens: {
            access: {
                type: "access",
                expiresIn: "1m",
            },
            refresh: {
                type: "refresh",
                expiresIn: "7200h",
            }
        }
    }
};
