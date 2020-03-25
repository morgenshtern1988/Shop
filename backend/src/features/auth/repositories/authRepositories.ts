import {IUser} from "../../../types/interface/user";
import {userModel} from "../../../dataAccess/entityModels/user";
import {generateAccessToken, replaceDbRefreshToken, generateRefreshToken} from "../../../helpers/authHelpers";
import * as bcrypt from 'bcrypt';

export const registerUser = async (user: IUser) => {
    user.password = await bcrypt.hash(user.password, 10);
    const result = await userModel.insertMany(user)
    return result
};

// геnерируем токены и обновляем refresh v mongo
export const updateTokens = (userId: any) => {
    const accessToken = generateAccessToken(userId);
    const refreshToken = generateRefreshToken();
    return replaceDbRefreshToken(refreshToken.id, userId)
        .then(() => ({
            accessToken,
            refreshToken: refreshToken.token,
        }))
};

export const authenticateUser = async (user: IUser) => {
    const userInDb = await userModel.findOne({email: user.email});
    if (userInDb) {
        const isPasswordMatching = await bcrypt.compare(user.password, userInDb.password);
        if (isPasswordMatching) {
            console.log("done");
          return updateTokens(userInDb._id)
        } else return "Wrong password"
    }
    return "User does not exist"
};

// // export const refreshTokens = (req: express.Request, res: express.Response) => {
// //     const { refreshToken } = req.body;
// //     let payload;
// //     try {
// //         payload = jwt.verify(refreshToken, appJwt.jwt.secret);
// //         if (payload.type !== "refresh") {
// //             res.status(400).json({ message: "Invalid token" });
// //             return;
// //         }
// //     } catch (e) {
// //         if (e instanceof jwt.TokenExpiredError) {
// //             res.status(400).json({ message: "Token expired" });
// //             return;
// //         } else if (e instanceof jwt.JsonWebTokenError) {
// //             res.status(400).json({ message: "Invalid token!" })
// //             return;
// //         }
// //     }
// //     tokenModel.findOne({ tokenId: payload.id })
// //         .then((token: any) => {
// //             if (token === null) {
// //                 throw new Error("Invalid token!");
// //             }
// //             return updateTokens((token.userId));
// //         })
// //         .then((tokens: any) => res.json(tokens))
// //         .catch((err: any) => res.status(400).json({ message: err.message }))
// // };
//
