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
router.post("/purchase",function(req,res){
    console.log(req.email)
    // stripe.customers.create({email:req.email})
    // .then((customer)=>{
    //      console.log(customer.id)
    //         stripe.invoiceItem.create({
    //         customer: customer.id,
    //         among: req.amount
    //     }).then(invoice=>{
    //         console.log(invoice)


    //     }).catch(err=>{console.log(err)})
    // }).catch(err=>console.log(err))}
})


router.get("/cart",function(req, res){
    res.render("cart.ejs")

})


module.exports = router



