import * as mongoose from 'mongoose';

export default () => {
    mongoose.connect(process.env.MongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('Connected DB')
}



  