const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const booksController = require("./controllers/booksController");

app.use(cors())

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);
app.post("/api/add", (req, res) => {
  const { body } = req;
  const { title, authors, description, previewLink } = req.body.data.volumeInfo;
  const { thumbnail } = req.body.data.volumeInfo.imageLinks;
  const { id } = req.body.data;
  const favoriteBook = {
    title: title,
    author: authors[0],
    description: description,
    previewLink: previewLink,
    thumbnail: thumbnail,
    bookID: id
  }
  booksController.addFavorite(favoriteBook);

})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksearch");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});