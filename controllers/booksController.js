const db = require("../models");

// Defining methods for the booksController
module.exports = {
  addFavorite: function(req, res) {
    db.Book
      .create({
        bookID: req.bookID,
        title: req.title,
        author: req.author,
        synopsis: req.description,
        thumbnail: req.thumbnail,
        link: req.previewLink
      })
      .then(
        console.log("Added Book to favorites!")
        // dbModel => res.json(dbModel)
        )
      // .catch(err => res.status(422).json(err));
  },
  removeFavorite: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
