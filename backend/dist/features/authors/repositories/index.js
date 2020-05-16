"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authors_1 = require("../../../dataAccess/entityModels/authors");
exports.adminCreateAuthor = async (author) => {
    const result = await authors_1.authorModel.insertMany(author);
    // return printingEditionModel.find({}).populate("author_ids");
    /* await authorModel.find()
         .populate("product_ids")
         .exec(function (err, story) {
             if (err)
                 console.log('The creator :', story)
             // prints "The creator is Guillermo"
         });*/
    return result;
};
exports.adminShowAuthor = async () => {
    return authors_1.authorModel.find({}).populate("product_ids");
    // authorModel.paginate({}, {page: 3, limit: 10}, function (err, result) {
    //         console.error(err);
    //         console.log('Pages:', result);
    //     }
    // console.log(paginatedResults);
    // )
};
exports.adminRemoveAuthor = async (id) => {
    const authors = await authors_1.authorModel.findById(id);
    await authors_1.authorModel.remove(authors);
    return await authors_1.authorModel.find({}).populate("product_ids");
};
//# sourceMappingURL=index.js.map