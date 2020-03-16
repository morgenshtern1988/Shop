"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.PrintingEdition = mongoose.model('PrintingEdition', new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    cover_image: {
        type: String
    },
    removes_at: {
        type: Boolean
    },
    type: {
        type: String
    },
    price: {
        type: Number
    },
    currency: {
        type: String
    },
    authot_ids: {
        type: mongoose.Schema.Types.ObjectId
    },
}));
//# sourceMappingURL=printing-edition.js.map