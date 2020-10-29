import { MongoClient } from 'mongodb';
import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import './initialize-db';
import { authenticationRoute } from './authenticate'
import { connectDB } from './connect-db'
import { updateDog } from './communicate-db';

let port = process.env.PORT || 7777;
let app = express();

app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);
app.listen(port,console.info("Server running, listening on port ", port));

authenticationRoute(app);

if (process.env.NODE_ENV === `production`) {
    app.use(express.static(path.resolve(__dirname,'../../dist')));
    app.get('/*',(req,res)=>{
        res.sendFile(path.resolve('index.html'));
    });
}

app.post('/doggo/update',async (req,res)=>{
    let db = await connectDB();
    await updateDog(req.body.dog);
    res.status(200).send();
});

app.post('/doggo/new',async (req,res)=>{
    let dog = req.body.dog;
    let db = await connectDB();
    let collection = db.collection(`dogs`);
    await collection.insertOne(dog);
    res.status(200).send();
});
