import {IAuthor} from "../api";
import {authorModel} from "../../../dataAccess/entityModels/authors";

export const adminCreateAuthor = async (author: IAuthor) => {
    const result = await authorModel.insertMany(author);
    return result;
};
