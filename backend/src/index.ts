import * as express from 'express';
import *  as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import connectMongo from "./dataAccess/dataBase/connectdb";
import { User } from './dataAccess/entityModels/user';
import { PrintingEdition } from "./dataAccess/entityModels/printing-edition";

require('dotenv').config()
connectMongo();

// const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// const app = express();
const jsonParser = express.json();

const mongoClient = new MongoClient(process.env.MongoUrl, { useNewUrlParser: true });

let dbClient;

// app.use(express.static(__dirname + "/public"));

//СОЗДАНИЕ КОЛЛЕКЦИИ printing-edition
mongoClient.connect(function (err: any, client: any) {

  // if (err) return console.log(err);
  // dbClient = client;
  // app.locals.collection = client.db("BookStoreBD").collection("printing-edition");
  
});

app.get("/printing-edition", async function (request, response) {

  const collection = request.app.locals.collection;
  await collection.find({}).toArray(function (err: any, printingEdition: any) {
    if (err) return console.log(err);
    response.send(printingEdition)
    // PrintingEditionModel.find()
    //   .then((books)=>{
    //     response.send(books)
    //   })
  })
}
);

app.post("/printing-edition", jsonParser, async (request, response): Promise<any> => {
  // if (!request.body) return response.sendStatus(400);
  // const printingEdition = request.body;
  //  await PrintingEdition.insertMany(printingEdition, function (err: any, result: any) {
  //   response.send(printingEdition);
  // });
  const data = request.body;
  PrintingEdition.create(request.body)
  
  response.send(data)
})

app.listen(3000, function () {
  console.log("Сервер ожидает подключения...");
});
  // const collection = request.app.locals.collection;
  // collection.insertMany(printingEdition, function (err: any, result: any) {

  //   response.send(printingEdition);
  // });
// });

  // for (let i = 0; i < request.body.length; i++) {
  //   let name = request.body[i].name;
  //   let description = request.body[i].description;  
  //   let printingEdition = {
  //         name: name,
  //         description: description,
  //       };

  //   const collection = request.app.locals.collection;
  //   collection.insertOne(printingEdition, function (err: any, result: any) {
  //     if (err) return console.log(err);
  //     response.send(printingEdition);
  //   });
  // }
  // for (let i = 0; i <= request.body.length;) {
    // const name = request.body.name[i];
    // const description = request.body.description;
    // console.log(name)
    // let printingEdition = request.body;
    //   console.log(request.body)
    // const collection = request.app.locals.collection;
    // collection.insertOne(printingEdition, function (err: any, result: any) {

    //   if (err) return console.log(err);
    //   response.send(printingEdition);
    // });
  // }
  // const name = request.body.name;
  // const description = request.body.description;

  // let printingEdition = {
  //       name: name,
  //       description: description,
  //     };

  // const collection = request.app.locals.collection;
  // collection.insertOne(printingEdition, function(err:any, result:any){

  //     if(err) return console.log(err);
  //     response.send(printingEdition);
  // });


// app.post("/api/printing-edition", jsonParser, function (req: any, res: any) {

//   if (!req.body) return res.sendStatus(400);
// console.log(req.body)
//   const name = req.body.name;
//   const description = req.body.description;

//   const printingEdition = {
//     name: name,
//     description: description,
//   };


////////////////////////////////////////////
// app.get("/api/printing-edition", function (req: any, res: any) {
//   const collection = req.app.locals.collection;
//   collection.find({}).toArray(function (err: any, printingEdition: any) {
//     if (err) return console.log(err);
//     res.send(printingEdition)
//   });
// });

// app.get("/api/printing-edition/:id", function (req: any, res: any) {

//   const id = new objectId(req.params.id);
//   const collection = req.app.locals.collection;
//   collection.findOne({ _id: id }, function (err: any, printingEdition: any) {

//     if (err) return console.log(err);
//     res.send(printingEdition);
//   });
// });



//   const collection = req.app.locals.collection;
//   collection.insertOne(printingEdition, function (err: any, result: any) {

//     if (err) return console.log(err);
//     res.send(printingEdition);
//   });
// });

// app.delete("/api/printing-edition/:id", function (req: any, res: any) {

//   const id = new objectId(req.params.id);
//   const collection = req.app.locals.collection;
//   collection.findOneAndDelete({ _id: id }, function (err: any, result: any) {

//     if (err) return console.log(err);
//     let printingEdition = result.value;
//     res.send(printingEdition);
//   });
// });

// app.put("/api/printing-edition", jsonParser, function (req: any, res: any) {

//   if (!req.body) return res.sendStatus(400);
//   const id = new objectId(req.body.id);
//   const name = req.body.name;
//   const description = req.body.description;

//   const collection = req.app.locals.collection;
//   collection.findOneAndUpdate({ _id: id }, { $set: { description: description, name: name } },
//     { returnOriginal: false }, function (err: any, result: any) {

//       if (err) return console.log(err);
//       const printingEdition = result.value;
//       res.send(printingEdition);
//     });
// });









// app.post('/',  (request: express.Request, response: express.Response) => {
//   // const result = User.insertMany({email:"Katya",role:12});
//   const userData = request.body;
//   // console.log(request)
//   response.send(userData);
// });

// app.get('/', async (request: express.Request, response: express.Response) => {
//   let person = {name:"Katya"};
//   const result = await User.insertMany(person, function(err:any,result:any){
//     console.log(result.ops);
//   });
//   console.log(result)
//   response.send(result)
// });

// app.get('/printing-dition', async (request: express.Request, response: express.Response) => {
//   const result = await PrintingEdition.insertMany({
//     email: 'DDD@asdasd.ru',
//   });
//   response.send(result)
// });

// app.listen(3001);