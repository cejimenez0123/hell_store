const express = require("express"
)
const router = express.Router(), Book = require("../models/books.js")



router.post("/users/session",function(req,res){}



)
router.get("/",function(req,res){
   const book =  Book.find()
   console.log()
   book.count
   res.render("index")
})