"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userRoleType_1 = require("../emuns/userRoleType");
exports.UsersSchema = new mongoose.Schema({
    firstName: {
        type: String, required: true
    },
    lastName: {
        type: String, required: true
    },
    avatar: {
        type: String
    },
    dateOfRegistration: {
        type: Date, default: Date.now
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    role: {
        type: userRoleType_1.userRoleType,
    }
});
exports.userModel = mongoose.model('User', exports.UsersSchema);
//# sourceMappingURL=user.js.map