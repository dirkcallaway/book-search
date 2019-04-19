const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/add")
  .post(booksController.addFavorite);


// Matches with "/api/favorites/:id"
router.route("/favorites/:id")
  .delete(booksController.removeFavorite);

module.exports = router;
