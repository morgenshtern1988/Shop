"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.User = mongoose.model('User', new mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: Number
    }
}));
//# sourceMappingURL=user.js.map