"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../../dataAccess/entityModels/user");
exports.adminShowUser = async () => {
    const arrUser = await user_1.userModel.find({});
    // let arr = [];
    return arrUser.map((user) => {
        return {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            email: user.email,
        };
    });
};
//# sourceMappingURL=index.js.map