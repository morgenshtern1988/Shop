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
    /* var pageOptions = {
         page: req.query.page || 0,
         limit: req.query.limit || 10
     };

     authorModel.find()
         .skip(pageOptions.page*pageOptions.limit)
         .limit(pageOptions.limit)
         .exec(function (err, doc) {
             if(err) { res.status(500).json(err); return; };
             res.status(200).json(doc);
         })*/
    // return authorModel.find({}, {}, {skip: 2, limit: 3}, function (err, results) {
    // });
    // return authorModel.find({}, {skip: 1, limit: 1})
    // .populate("product_ids");
};
exports.adminRemoveAuthor = async (id) => {
    const authors = await authors_1.authorModel.findById(id);
    await authors_1.authorModel.remove(authors);
    return await authors_1.authorModel.find({}).populate("product_ids");
};
//# sourceMappingURL=index.js.map