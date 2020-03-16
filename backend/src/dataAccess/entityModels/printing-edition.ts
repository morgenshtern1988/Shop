import * as mongoose from 'mongoose';

interface PrintingEditionModel  {
    name: string;
    description: string;
    cover_image: string;
    removes_at: string;
    type: string;
    price: number;
    currency: string;
    author_ids: Array<string>;
}

interface PrintingEditionSchema extends PrintingEditionModel, mongoose.Document { }

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
