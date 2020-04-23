"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../../dataAccess/entityModels/user");
const authHelpers_1 = require("../../../helpers/authHelpers");
const bcrypt = require("bcrypt");
exports.registerUser = async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
    const result = await user_1.userModel.insertMany(user);
    return result;
};
exports.updateTokens = async (user) => {
    const accessToken = await authHelpers_1.generateAccessToken(user);
    const refreshToken = await authHelpers_1.generateRefreshToken(user);
    return {
        accessToken,
        refreshToken,
    };
};
exports.authenticateUser = async (user) => {
    const userInDb = await user_1.userModel.findOne({ email: user.email });
    // console.log(userInDb);
    if (userInDb) {
        const isPasswordMatching = await bcrypt.compare(user.password, userInDb.password);
        if (isPasswordMatching) {
            return await exports.updateTokens(userInDb);
        }
        else
            throw new Error("Wrong password");
    }
    else
        throw new Error("User does not exist");
};
/*

export const refreshTokens = (req: express.Request, res: express.Response) => {
    const { refreshToken } = req.body;
    let payload;
    try {
        payload = jwt.verify(refreshToken, appJwt.jwt.secret);
        if (payload.type !== "refresh") {
            res.status(400).json({ message: "Invalid token" });
            return;
        }
    } catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
            res.status(400).json({ message: "Token expired" });
            return;
        } else if (e instanceof jwt.JsonWebTokenError) {
            res.status(400).json({ message: "Invalid token!" })
            return;
        }
    }
    tokenModel.findOne({ tokenId: payload.id })
        .then((token: any) => {
            if (token === null) {
                throw new Error("Invalid token!");
            }
            return updateTokens((token.userId));
        })
        .then((tokens: any) => res.json(tokens))
        .catch((err: any) => res.status(400).json({ message: err.message }))
};

*/
//# sourceMappingURL=authRepositories.js.map