const mongoose = require("mongoose")
mongoose.set('debug', true);

const purchaseSchema  = mongoose.Schema({
    customerId: String,
    cost:String,
    createdAt: {type: Date, default: Date.now}
})


module.exports = mongoose.model("Purchase",purchaseSchema)


