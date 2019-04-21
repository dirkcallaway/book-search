const db = require("../models");

// Defining methods for the booksController
module.exports = {
  addFavorite: function(req, res) {
    console.log("Added Book to favorites!");
    db.Book
      .create(req.body)
      .then(
        dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeFavorite: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getFavorites: function(req, res) {
    db.Book
    .find()
    .then(dbModel => console.log(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Book
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
},
};
