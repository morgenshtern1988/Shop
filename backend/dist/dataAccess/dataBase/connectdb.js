"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = require('mongoose');
exports.a = exports.mongoose.connect("http://mongodb://localhost:27017/shopDb")
    .then(() => console.log("goood)"))
    .catch(() => console.log('error'));
//# sourceMappingURL=connectdb.js.map