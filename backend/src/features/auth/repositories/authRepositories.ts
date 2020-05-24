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
        console.log("user in DB:", userInDb);
        if (!userInDb.confirmed) {
            console.log("зашли в первую ошибку");
            new Error("Email not confirmed")
        } else if (userInDb) {
            console.log("зашли тру юзер в ДБ");
            const isPasswordMatching = await bcrypt.compare(user.password, userInDb.password);
            if (isPasswordMatching) {
                await updateTokens(userInDb)
            } else new Error("Wrong password")
        } else new Error("User does not exist")
    } catch (e) {
        throw new Error(e)
    }
};
