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
};
export const adminRemoveAuthor = async (id: string) => {
    const authors = await authorModel.findById(id);
    await authorModel.remove(authors);
    return await authorModel.find({}).populate("product_ids");
};
