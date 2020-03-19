import * as mongoose from 'mongoose';
import {IUser} from "../../types/interface/user";

// interface UserSchema extends UserModel, mongoose.Document {}

export const UsersSchema = new mongoose.Schema({
    userName:{
        type:String,
    },
    firstName:{
        type:Number,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: Array,
    }
});

interface userModel extends IUser, mongoose.Document {}
export const userModel = mongoose.model<userModel>('User', UsersSchema);
