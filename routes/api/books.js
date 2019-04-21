const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
  .get(booksController.findAll)
router.route("/add")
  .post(booksController.addFavorite);

// Matches with "/api/favorites/:id"
router.route("/:id")
  .delete(booksController.removeFavorite);

module.exports = router;

