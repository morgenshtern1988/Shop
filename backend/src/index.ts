import * as express from 'express';
import *  as bodyParser from 'body-parser';
import connectMongo from "./dataAccess/dataBase/connectdb";
import { User } from './dataAccess/entityModels/user';

require('dotenv').config()
connectMongo();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
 
app.get('/', async (request: express.Request, response: express.Response) => {
  const result = await User.insertMany({
    email: 'asdas@asdasd.ru',
    password: 'asdasdasd1231231',
    role: 1,
  });
  response.send('User created')
});

app.get('/find', async (request: express.Request, response: express.Response) => {
  const result = await User.findOne({
    email: 'asdas@asdasd.ru',
  });
  response.json(result)
});
 
app.listen(3000);
