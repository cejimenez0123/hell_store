const express = require("express"), app = express(), bodyParser = require("body-parser")

const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const Customer = require("./models/customer.js"), Purchase = require("./models/purchase.js"),
Book = require("./models/book")
MongoClient.connect(url, async function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(error,res){
      if (error) throw error;
      console.log("Customers collections created")
      db.close();
  })

});

app.get("/",(req,res)=> {
    res.send()
})

app.listen(3003)