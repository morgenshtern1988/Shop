"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const printingEditionsType_1 = require("../emuns/printingEditionsType");
exports.PrintingEditionSchema = new mongoose.Schema({
    name: {
        type: String, required: true,
    },
    description: {
        type: String, required: true
    },
    cover_image: {
        type: String
        // data: Buffer,
        // contentType: String,
    },
    removes_at: {
        type: Boolean, default: false,
    },
    type: {
        type: printingEditionsType_1.printingEditionsType, required: true,
    },
    price: {
        type: Number, required: true
    },
    currency: {
        type: String, default: "EUR",
    },
    author_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'author', required: true }]
});
exports.printingEditionModel = mongoose.model("printing-edition", exports.PrintingEditionSchema);
//# sourceMappingURL=printing-edition.js.map