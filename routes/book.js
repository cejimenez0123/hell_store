const express = require("express"
)
const router = express.Router(), Book = require("../models/book")



// router.get("/",function(req,res){
//    const book =  Book.find()
//    console.log("BOOK COUNT!!",book.count)
//     res.render("index.ejs",{count: book.count})
// })
module.exports = router