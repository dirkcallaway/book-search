const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  thumbnail: String,
  isFavorite: { type: Boolean, default: false },
  link: String,
  bookID: {type: String, required: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
