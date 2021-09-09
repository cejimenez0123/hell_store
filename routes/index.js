const express = require("express"
)
const router = express.Router(), Book = require("../models/book")



router.post("/users/session",function(req,res){}



)
router.get("/",function(req,res){
   // const book = new Book({bookName:"Good Hell",bookAuthor})
   const books =  Book.find()
   var book 
   books.count((err,res)=>{
   if (err){
      console.log(`err`,err)}else{
         console.log('bookCount',res)
         book = res
      }
   })
   res.render("index.ejs", {bookCount: book}
   )
})
module.exports = router