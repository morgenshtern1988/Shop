export default {
    appPort: "7227",
    jwt: {
        secret: "SUPER SECRET TOKEN",
        tokens: {
            access: {
                type: "access",
                expiresIn: "2m",
            },
            refresh: {
                type: "refresh",
                expiresIn: "3m",
            }
        }
    }
};
