import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { defaultState } from './defaultState';
import {connectDB} from "./connect-db";
import {updateDog} from "./communicate-db";

let port = 7777;
let app = express();

const authorizationTokens = [];

app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);

app.get('/user/:id',(req,res)=>{
    let user = defaultState.users.find(user=>user.id === req.params.id);
    if (!user) {
        res.status(500).send();
    } else {
        res.json(user);
    }
});

app.post('/doggo/update',async (req,res)=>{
    // let db = await connectDB();
    // await updateDog(req.body.dog);
    let { dog } = req.body;
    res.status(200).send();
});

app.post('/doggo/new',async (req,res)=>{
    // let dog = req.body.dog;
    // let db = await connectDB();
    // let collection = db.collection(`dogs`);
    // await collection.insertOne(dog);
    let { dog } = req.body;
    res.status(200).send();
});
