import * as mongoose from "mongoose";
import {Orders} from "../../features/orders/api";

export const ordersSchema = new mongoose.Schema({
        user_id: {type: mongoose.Schema.Types.ObjectId},
        items: {
            type: [
                {
                    printing_editing_id: {type: mongoose.Schema.Types.ObjectId},
                    count: {type: Number, required: true},
                    price: {type: Number, required: true},
                    currency: {type: String, required: true},
                }
            ]
        },
        amount: {type: Number},
        transaction_id: {type: String},
        createData: {type: Date, default:Date.now}
    }
);

interface ordersModel extends  Orders, mongoose.Document{}
export const ordersModel = mongoose.model<ordersModel>('Orders', ordersSchema);
