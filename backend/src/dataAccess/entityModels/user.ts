import * as mongoose from 'mongoose';
import {IUser} from "../../features/user/api";
import {userRoleType} from "../emuns/userRoleType";

export const UsersSchema = new mongoose.Schema({
    firstName: {
        type: String, required: true
    },
    lastName: {
        type: String, required: true
    },
    avatar: {
        type: String
    },
    dateOfRegistration: {
        type: Date, default: Date.now
    },

    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    role: {
        type: userRoleType,
    }
});

interface userModel extends IUser, mongoose.Document {
}

export const userModel = mongoose.model<userModel>('User', UsersSchema);
