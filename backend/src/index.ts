import * as express from 'express';
import *  as bodyParser from 'body-parser';
import connectMongo from "./dataAccess/dataBase/connectdb";
import { User } from './dataAccess/entityModels/user';
import { PrintingEdition } from "./dataAccess/entityModels/printing-edition"

require('dotenv').config()
connectMongo();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
 
app.post('/',  (request: express.Request, response: express.Response) => {
  // const result = User.insertMany({email:"Katya",role:12});
  const userData = request.body;
  // console.log(request)
  response.send(userData);
});

app.get('/', async (request: express.Request, response: express.Response) => {
  const result = await User.insertMany({email:"Katya",role:12});
  console.log(request)
  response.send(result)
});

app.get('/printing-dition', async (request: express.Request, response: express.Response) => {
  const result = await PrintingEdition.insertMany({
    email: 'DDD@asdasd.ru',
  });
  response.send(result)
});
 
app.listen(3000);
