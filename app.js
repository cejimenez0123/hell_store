const express = require("express"), app = express(), bodyParser = require("body-parser")

const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const Customer = require("./models/customer.js"), Purchase = require("./models/purchase.js"),
Book = require("./models/book")


const port = 3003
const bookRoutes = require("./routes/book")
app.get("/",function(req,res){
  const book =  Book.find()
  console.log("BOOK COUNT!!",book.count)
   res.render("index.ejs",{count: book.count})
})
app.listen(port, ()=>console.log("Server listening..."))
// app.use(require("express-session")({
//   secret: "So it goes",
//   resave: false,
//   saveUninitialized: false
// }));

app.locals.moment = require("moment")
app.set("view engine","ejs")
app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.render('error',{error: err});
});
// app.use(bookRoutes)