const mongoose = require("mongoose")


var customerSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName:String,
    streetNumber:String,
    streetName: String,
})

module.exports = mongoose.model("Customer",customerSchema)