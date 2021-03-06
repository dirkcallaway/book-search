const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true},
  author: { type: String, required: true },
  synopsis: String,
  thumbnail: String,
  link: String,
  bookID: {type: String, required: true, unique: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
