import * as mongoose from 'mongoose';

interface UserModel {
    email: string;
    password: string;
    role: number;
}

interface UserShema extends UserModel, mongoose.Document {}

export const User = mongoose.model('User', new mongoose.Schema({ 
    email: {
        type: String,
    }, 
    password: {
        type: String,
    },
    role: {
        type: Number
    }
}));
