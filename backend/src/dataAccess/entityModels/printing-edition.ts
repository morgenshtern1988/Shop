import * as mongoose from 'mongoose';
import {IPrintingEdition} from "../../types/interface/printingEdition";

interface PrintingEditionSchema extends IPrintingEdition, mongoose.Document { }

//задаем название коллекции
export const PrintingEditionSchema = mongoose.model('printing-edition', new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    cover_image: {
        type: String
    },
    removes_at: {
        type: Boolean
    },
    type: {
        type: String
    },
    price: {
        type: Number
    },
    currency: {
        type: String
    },
    author_ids: {
        type: mongoose.Schema.Types.ObjectId
    },
}));
