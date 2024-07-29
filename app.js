// Import
const express = require('express');
const { json } = require('body-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors=require('cors');
const mongoose = require("mongoose");

const userRouter = require('./user-router');
// const sandeepRouter = require('./routes/sandeep');



//Mongo Database Connection
// TODO: enter your 👇 database name below 
const DB_USERNAME = "music";
const DB_PASSWORD = "lpnk4omJKymYHQ0V";
const DB_NAME = "sample_db";
const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@musiccluster.2ohisd8.mongodb.net/${DB_NAME}`;
mongoose.connect(URI);
mongoose.connection.on("connected", () => {
    console.log("mongodb is connected successfully");
});

// Declaration
const app = express();

// Middle Ware
app.use(logger("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Routing
app.use('/song', userRouter);
// app.use('/sandeep',sandeepRouter)

// Export
module.exports=app;