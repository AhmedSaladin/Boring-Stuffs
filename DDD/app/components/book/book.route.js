const router = require("express").Router();
const wrapper = require("../../middlewares/async.handler");
const { get_books_list, add_new_book } = require("./book.controller");

router
  .get("/books", wrapper(get_books_list))
  .post("/books", wrapper(add_new_book));

module.exports = router;
