"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_services_1 = require("../services/auth.services");
exports.registerUser = async (request, response) => {
    auth_services_1.createUser(request.body)
        .then(user => response.json(user))
        .catch(err => response.json(err));
};
exports.authenticateUser = async (request, response) => {
    auth_services_1.loginUser(request.body)
        .then(user => response.send(user))
        .catch(() => response.sendStatus(401));
    // .then(user => console.log("CATCHhh" + user))
    // .catch(err =>console.log("ERRrrrr" + err))
};
//# sourceMappingURL=auth.handlers.js.map