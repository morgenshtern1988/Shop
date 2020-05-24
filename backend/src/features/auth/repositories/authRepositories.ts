import {IUser} from "../../user/api";
import {userModel} from "../../../dataAccess/entityModels/user";
import {generateAccessToken, generateRefreshToken} from "../../../helpers/authHelpers";
import * as bcrypt from 'bcrypt';

export const registerUserByEmail = async (user: any) => {
    user.password = await bcrypt.hash(user.password, 10);
    return await userModel.create(user);
};

export const updateTokens = async (user: any) => {
    const accessToken = await generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);
    return {
        accessToken,
        refreshToken,
    }
};

export const authenticateUser = async (user: IUser) => {
    try {
        const userInDb = await userModel.findOne({email: user.email});
        if (userInDb === null) throw new Error("This user is not registered");
        if (!userInDb.confirmed) {
            throw new Error("Email not confirmed")
        } else if (userInDb) {
            const isPasswordMatching = await bcrypt.compare(user.password, userInDb.password);
            if (isPasswordMatching) {
                await updateTokens(userInDb)
            } else throw new Error("Wrong password")
        }
    } catch (e) {
        throw new Error(e.message)
    }
};
