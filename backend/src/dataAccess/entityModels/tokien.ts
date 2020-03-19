const mongoose = require("mongoose");

const TokenShema = new mongoose.Schema({
    tokenId: {
        type: String
    },
    userId: {
        type: String
    }
})

export const tokenModel = mongoose.model('Token', TokenShema)