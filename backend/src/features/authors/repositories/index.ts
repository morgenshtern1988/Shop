import {IAuthor} from "../api";
import {authorModel} from "../../../dataAccess/entityModels/authors";
import {printingEditionModel} from "../../../dataAccess/entityModels/printing-edition";

export const adminCreateAuthor = async (author: IAuthor) => {
    const result = await authorModel.insertMany(author);
    return result;
};
export const adminShowAuthor = async function (author: any) {
    const result = authorModel.find({});
    return result
};
