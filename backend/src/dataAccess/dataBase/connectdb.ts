import * as mongoose from 'mongoose';

// export default () => {
//     mongoose.connect(process.env.MongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
//     console.log('Connected DB..')
// }
export default () => {
    mongoose.connect("mongodb+srv://root:root@cluster0-jagqs.mongodb.net/BooksStore?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected DB..')
}



