"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_services_1 = require("../services/auth.services");
const jwt = require("jsonwebtoken");
const app_1 = require("../../../config/app");
const authRepositories_1 = require("../repositories/authRepositories");
const user_1 = require("../../../dataAccess/entityModels/user");
exports.getUserInfo = async (req, res) => {
    const userInDb = await user_1.userModel.findById(req.user.id);
    const { firstName, lastName, role, email } = userInDb;
    const data = {
        firstName, lastName, role, email,
    };
    res.json(data);
};
exports.registerUser = async (request, response) => {
    auth_services_1.createUser(request.body)
        .then(user => response.json(user))
        .catch(err => response.json(err));
};
exports.authenticateUser = async (request, response, next) => {
    auth_services_1.loginUser(request.body)
        .then((token) => response.json(token))
        .catch(() => response.sendStatus(401));
};
exports.tokenAccessLifeCheck = async (request, response, next) => {
    const accessToken = request.headers.authorization;
    let payload;
    if (!accessToken) {
        response.status(401).send('No token provided');
        return;
    }
    try {
        const resultVerify = await jwt.verify(accessToken, app_1.default.jwt.secret);
        next();
    }
    catch (e) {
        response.status(401).send(e);
    }
};
exports.refreshTokens = async (request, response) => {
    const refreshToken = request.headers.authorization;
    let payload;
    try {
        payload = jwt.verify(refreshToken, app_1.default.jwt.secret);
        let { role, id } = payload;
        const user = {
            id,
            role
        };
        const token = await authRepositories_1.updateTokens(user);
        response.json(token);
    }
    catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
            response.status(401).json({ message: "Token expired" });
            return;
        }
        else if (e instanceof jwt.JsonWebTokenError) {
            response.status(401).json({ message: "Invalid token!" });
            return;
        }
    }
};
const email_msgs_1 = require("../email.msgs");
const email_send_1 = require("../email.send");
const email_templates_1 = require("../email.templates");
exports.collectEmail = async (req, res) => {
    const { email, fistName, lastName, password } = req.body;
    await user_1.userModel.findOne({ email })
        .then(user => {
        // У нас новый пользователь! Отправьте им подтверждение по электронной почте.
        if (!user) {
            user_1.userModel.create({ email, fistName, lastName, password })
                .then(newUser => email_send_1.default(newUser.email, email_templates_1.default.confirm(newUser._id)))
                .then(() => res.json({ msg: email_msgs_1.default.confirm }))
                .catch(err => console.log(err));
        }
        // Мы уже видели этот адрес электронной почты. Но пользователь не имеет
        // нажали на ссылку подтверждения. Отправить еще одно подтверждение по электронной почте.
        else if (user && !user.confirmed) {
            email_send_1.default(user.email, email_templates_1.default.confirm(user._id))
                .then(() => res.json({ msg: email_msgs_1.default.resend }));
        }
        // Пользователь уже подтвердил этот адрес электронной почты
        else {
            res.json({ msg: email_msgs_1.default.alreadyConfirmed });
        }
    })
        .catch(err => {
        console.log("EEEEERRRRRRRRRORRRRRRRRR");
        console.log(err);
    });
};
/*
export const confirmEmail = async (req: Request, res: Response) => {
    const {id} = req.params;
    await userModel.findById(id)
        .then(user => {
            // Пользователь с таким идентификатором не существует в БД. Возможно, некоторые хитрые
            // пользователь попытался перейти на URL, отличный от того, который указан в
            // подтверждение по электронной почте.
            if (!user) {
                res.json({msg: msgs.couldNotFind})
            }
                // Пользователь существует, но не был подтвержден. Мы должны подтвердить это
            // Пользователь и сообщить им, что их адрес электронной почты подтвержден.
            else if (user && !user.confirmed) {
                userModel.findByIdAndUpdate(id, {confirmed: true})
                    .then(() => res.json({msg: msgs.confirmed}))
                    .catch(err => console.log(err))
            }
            // Пользователь уже подтвердил этот адрес электронной почты.
            else {
                res.json({msg: msgs.alreadyConfirmed})
            }
        })
        .catch(err => console.log(err))
};
*/
//# sourceMappingURL=auth.handlers.js.map