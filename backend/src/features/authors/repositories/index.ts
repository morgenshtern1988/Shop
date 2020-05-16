import {IAuthor} from "../api";
import {authorModel} from "../../../dataAccess/entityModels/authors";
import {printingEditionModel} from "../../../dataAccess/entityModels/printing-edition";

export const adminCreateAuthor = async (author: IAuthor) => {
    const result = await authorModel.insertMany(author);
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

export const adminShowAuthor = async () => {
    return authorModel.find({}).populate("product_ids");
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

export const adminRemoveAuthor = async (id: string) => {
    const authors = await authorModel.findById(id);
    await authorModel.remove(authors);
    return await authorModel.find({}).populate("product_ids");
};
