import * as mongoose from 'mongoose';

interface PrintingEditionModel {
    name: string;
    description:string;
    cover_image:string;
    removes_at:string;
    type:string;
    price:number;
    currency:string;
    authot_ids: Array<string>;
}

interface PrintingEditionSchema extends PrintingEditionModel, mongoose.Document {}

export const PrintingEdition = mongoose.model('PrintingEdition', new mongoose.Schema({ 
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
    authot_ids: {
        type: mongoose.Schema.Types.ObjectId
    },    
}));
