//mongodb+srv://hannan_mongo:<hannan_mongo@cluster0.2b0d6.mongodb.net/db?retryWrites=true&w=majority

var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var logger = require("morgan");
var Promise = require("bluebird");

var app = express();

// Set up mongoose connection
var mongoose = require("mongoose");
// For local dev
// var dev_db_url = 'mongodb://localhost:27017'
var dev_db_url = "mongodb://mongo:27017";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port);
