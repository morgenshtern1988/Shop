// import {MongoClient} from "mongodb";
//
// export const connect = () => {
//     let client = connectMongo();
//     function connectMongo() {
//         const connectDB = new MongoClient("mongodb+srv://root:root@cluster0-jagqs.mongodb.net/BooksStore?retryWrites=true&w=majority", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('Connected DB..');
//         connectDB.on("error", err => {
//             console.error("Mongo Connection error", err);
//             client = connectMongo();
//         });
//         return connectDB.connect()
//     }
//
// }
import * as mongoose from "mongoose";

export const connect = () => {
    mongoose.connect("mongodb+srv://root:root@cluster0-jagqs.mongodb.net/BooksStore?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected DB..')
};
