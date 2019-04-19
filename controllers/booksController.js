const db = require("../models");

// Defining methods for the booksController
module.exports = {
  addFavorite: function(req, res) {
    console.log("Adding Book!");
    // db.Book
      // .create(req.query)
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
  },
  removeFavorite: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
