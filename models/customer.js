const mongoose = require("mongoose")

mongoose.set('debug', true);
var customerSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName:String,
    streetNumber:String,
    streetName: String,
})

module.exports = mongoose.model("Customer",customerSchema)