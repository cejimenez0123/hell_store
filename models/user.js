const mongoose = require("mongoose")
mongoose.set('debug', true);

const UserSchema  = new mongoose.Schema({
    username: String,
    password:String,
    createdAt: {type: Date, default: Date.now}
})


module.exports = mongoose.model("User",UserSchema)


