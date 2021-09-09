const express = require("express"), app = express(), bodyParser = require("body-parser")

const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/hell";
const Customer = require("./models/customer.js"), Purchase = require("./models/purchase.js"),
Book = require("./models/book")


const port = 3003
const bookRoutes = require("./routes/book")
const indexRoutes = require("./routes/index")

app.listen(port, ()=>console.log("Server listening..."))
mongoose.connect(url)
// app.use(require("express-session")({
//   secret: "So it goes",
//   resave: false,
//   saveUninitialized: false
// }));

//VIEWS MIDDLE
app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs")
app.set("views","./views")

//TIME
app.locals.moment = require("moment")



//ERROR
app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.render('error',{error: err});
});
app.use(indexRoutes)
// app.use(bookRoutes)