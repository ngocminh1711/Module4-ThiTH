import express from 'express'
import path from "path";
import bodyParser from "body-parser";
import staffRouter from "./src/router/staff.router";
import multer from 'multer'
import {ConnectDB} from "./src/models/ConnectDB";
const index = express()
const PORT = 1711;



index.set('view engine', 'ejs');
index.set('views',path.join(__dirname, 'views'));


index.use(express.static(path.join(__dirname, 'public')));

index.use(express.json())
index.use(bodyParser.json());


const db = new ConnectDB();

db.connect().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err.message);
})


index.use('/', staffRouter)


index.listen(PORT, function() {
    console.log('http://localhost:'+ PORT);
})