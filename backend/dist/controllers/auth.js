"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../dataAccess/entityModels/user");
exports.controllerRole = async (request, response, next) => {
    console.log("зашел v contRole");
    if (request.user) {
        console.log("vnutri");
        console.log(request.user);
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
            response.setHeader("InfoUser", currentUser);
            next();
        }
        else
            response.send("User does not exist").status(401);
    }
    else {
        console.log("прошел ку");
        next();
    }
};
//# sourceMappingURL=auth.js.map