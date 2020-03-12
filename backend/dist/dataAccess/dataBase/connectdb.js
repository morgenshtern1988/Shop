"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
exports.a = mongoose.connect("http://mongodb://localhost/shopDb")
    .then(() => console.log("goood)"))
    .catch(() => console.log('error'));
//# sourceMappingURL=connectdb.js.map