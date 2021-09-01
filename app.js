const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

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