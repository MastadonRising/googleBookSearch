const router = require("express").Router();
const booksController = require("../controllers/booksController");

router
  .route("/api/books")
  .post(booksController.create)
  .get(booksController.findAll);
router
  .route("/api/books:id")
  .delete(booksController.remove)
  .get(booksController.findById)
  .put(booksController.update);

module.exports = router;
