const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
// const createRouter = require('.')

app.listen(9000, function(){
  console.log('app running on port 9000')
})