import * as bcrypt from 'bcrypt';
import * as express from 'express';
import {userModel} from "../dataAccess/entityModels/user";

const app = express();

export const registerUser = async (request: any, response: any) => {
    if (!request.body) return response.sendStatus(400);
    const infoUser = request.body;
    const hashedPassword = await bcrypt.hash(infoUser.password, 10);
    infoUser.password = hashedPassword;
    const user = request.body;
    await userModel.insertMany(user, (err: any, result: any) => {
            response.send(user);
        }
    );
};

export const authorizationUser = async function (request: express.Request, response: express.Response, next: express.NextFunction) {
    const logInData = request.body;
    const user = await userModel.findOne({email: logInData.email});
    if (user) {
        const isPasswordMatching = await bcrypt.compare(logInData.password, user.password);
        if (isPasswordMatching) {
            user.password = undefined;
            response.send(user);
        } else response.sendStatus(401)
    } else response.sendStatus(401)
};
