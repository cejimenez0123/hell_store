const express = require("express"
)
const router = express.Router(), Book = require("../models/book")



router.post("/users/session",function(req,res){}



)
router.get("/",function(req,resp){
   // const book = new Book({bookName:"Good Hell",bookAuthor})
   const books =  Book.find()
   var book 
   books.count((err,res)=>{
   if (err){
      console.log(`err`,err)}else{
         console.log('bookCount',res)
         resp.render("index.ejs", {bookCount: res})
         
   }})
  
   
})
module.exports = router