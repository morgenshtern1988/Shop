"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_paginate_1 = require("mongoose-paginate");
exports.authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dateOfCreate: { type: Date, default: Date.now },
    removed_at: { type: Boolean, default: false },
    product_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'printing-edition', required: true }]
});
exports.authorSchema.plugin(mongoose_paginate_1.default);
console.log("SCHEMA:", exports.authorSchema);
exports.authorModel = mongoose.model('author', exports.authorSchema);
//# sourceMappingURL=authors.js.map