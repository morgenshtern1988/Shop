const mongoose = require("mongoose");

// import * as mongoose from 'mongoose';

const TokenShema = new mongoose.Schema({
    tokenId: {
        type: String
    },
    userId: {
        type: String
    }
})

export const tokenModel = mongoose.model('Token', TokenShema)