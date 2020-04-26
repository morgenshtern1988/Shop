import mongoose,{model} from 'mongoose';
import  mongoosePaginate  from "mongoose-paginate";
import {Author} from "../../features/authors/api";

const schema = mongoose.Schema;
export const authorSchema = new schema({
    name: {type: String,required: true},
    createdDate: { type: Date, default: Date.now },
    removed_at:{type: Boolean, default:false},
    product_ids: [{ type: mongoose.Schema.Types.ObjectId,ref: 'printing-edition',required: true }]
});
authorSchema.plugin(mongoosePaginate);

interface authorModel extends Author,mongoose.Document {}

const authorModel = model<authorModel>('Author', authorSchema);
export default authorModel;
