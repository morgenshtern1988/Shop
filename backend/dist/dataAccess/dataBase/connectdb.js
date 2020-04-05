"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// export default () => {
//     mongoose.connect(process.env.MongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
//     console.log('Connected DB..')
// }
exports.default = () => {
    mongoose.connect("mongodb+srv://root:root@cluster0-jagqs.mongodb.net/BooksStore?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected DB..');
};
//# sourceMappingURL=connectdb.js.map