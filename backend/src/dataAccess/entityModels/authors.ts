import * as mongoose from 'mongoose';
// import mongoosePaginate from "mongoose-paginate";
import {IAuthor} from "../../features/authors/api";

export const authorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    dateOfCreate: {type: Date, default: Date.now},
    removed_at: {type: Boolean, default: false},
    product_ids: [{type: mongoose.Schema.Types.ObjectId, ref: 'printing-edition'}]
});

// authorSchema.plugin(mongoosePaginate);

interface authorModel extends IAuthor, mongoose.Document {
}

export const authorModel = mongoose.model<authorModel>('Author', authorSchema);
// export default authorModel;
