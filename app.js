const express = require("express"), app = express(), path = require("path")

const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/hell";

const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`)


const Customer = require("./models/customer.js"),
Purchase = require("./models/purchase.js"),
Book = require("./models/book")
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const port = 3003
const bookRoutes = require("./routes/book")
const indexRoutes = require("./routes/index")
const purchaseRoutes = require("./routes/purchase")

app.listen(port, ()=>console.log("Server listening..."))
mongoose.connect(url)

// app.use(require("express-session")({
//   secret: "So it goes",
//   resave: false,
//   saveUninitialized: false
// }));

//VIEWS MIDDLE
// for (let i = 0; i < 100; i++) {
//   Book.create({bookName:"Good Hell",bookAuthor:"Sol Emilio",price:"7.00"})
// }
app.use(express.static(path.join(__dirname, '/public')));
// app.use("/cart.js",express.static("/public"))
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
app.use(purchaseRoutes)
// app.use(bookRoutes)