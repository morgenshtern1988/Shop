import * as mongoose from 'mongoose';
import {IPrintingEdition} from "../../types/interface/printingEdition";
import {printingEditionsType} from "../emuns/printingEditionsType";
// import mongoosePaginate from 'mongoose-paginate';

export const PrintingEditionSchema = new mongoose.Schema({
    name: {
        type: String, required: true,
    },
    description: {
        type: String, required: true
    },
    cover_image: {
        type: String
    },
    removes_at: {
        type: Boolean, default: false,
    },
    type: {
        type: printingEditionsType, required: true,
    },
    price: {
        type: Number
    },
    currency: {
        type: String, default: "EUR",
    },
    author_ids: [{type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true}]
});

// PrintingEditionSchema.plugin(mongoosePaginate);

interface printingEditionModel extends IPrintingEdition, mongoose.Document {
}


export const printingEditionModel = mongoose.model<printingEditionModel>("printing-edition", PrintingEditionSchema);
