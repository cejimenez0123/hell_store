const mongoose = require("mongoose")


const purchaseSchema  = mongoose.Schema({
    customerId: String,
    cost:String,
    createdAt: {type: Date, default: Date.now}
})


module.exports = mongoose.model("Purchase",purchaseSchema)


