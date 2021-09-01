const mongoose = require("mongoose")


const bookCreationSchema = new mongoose.Schema({
    bookName:String,
    bookAuthor:String,
    bookImages: String,
    bio: String,
    price: Number,
	createdAt: {type: Date, default: Date.now}
})


module.exports = mongoose.model("Book", bookCreationSchema);