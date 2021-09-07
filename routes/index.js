const express = require("express"
)
const router = express.Router(), Book = require("../models/books.js")



router.get("/",function(req,res){
   const book =  Book.find()
})