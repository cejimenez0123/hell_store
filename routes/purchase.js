const express = require("express");
const { model } = require("mongoose");
const purchaseController = require ("../controllers/purchase")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const router = express.Router();


// router.get("/purchase",function(err,res){
//     if(err){
//         console.log(err)
//     }else {
//         res.redirect("/cart")
//     }

// })



router.get("/cart",function(req, res){
    res.render("cart.ejs")

})


module.exports = router



