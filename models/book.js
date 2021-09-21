const mongoose = require("mongoose")

mongoose.set('debug', true);
const bookCreationSchema = new mongoose.Schema({
    bookName:String,
    bookAuthor:String,
    bio: String,
    price: Number,
	createdAt: {type: Date, default: Date.now}
})


module.exports = mongoose.model("Book", bookCreationSchema);