"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../dataAccess/entityModels/user");
exports.controllerRole = async (request, response, next) => {
    try {
        const userInfo = request.user;
        const userInDB = await user_1.userModel.findOne({ _id: userInfo.id });
        if (userInDB) {
            const user = {
                firstName: userInDB.firstName,
                lastName: userInDB.lastName,
                email: userInDB.email,
                role: userInDB.role,
            };
            const currentUser = JSON.stringify(user);
            response.json(currentUser);
            next();
        }
    }
    catch (_a) {
        response.send("User does not exist").status(401);
    }
};
//# sourceMappingURL=auth.js.map