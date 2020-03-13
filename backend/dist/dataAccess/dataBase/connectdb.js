"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.default = () => {
    mongoose.connect(process.env.MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected DB');
};
//# sourceMappingURL=connectdb.js.map