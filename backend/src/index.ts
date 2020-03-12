import * as express from 'express';
import {a} from "./dataAccess/dataBase/connectdb"

const app = express();
 
app.get('/', (request, response) => {
  response.send(' index.ts');
});
 
app.listen(3000);
