"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const TokenShema = new mongoose.Schema({
    tokenId: {
        type: String
    },
    userId: {
        type: String
    }
});
exports.tokenModel = mongoose.model('Token', TokenShema);
//# sourceMappingURL=tokien.js.map