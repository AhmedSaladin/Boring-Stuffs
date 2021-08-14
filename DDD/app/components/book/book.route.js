const router = require("express").Router();
const wrapper = require("../../middlewares/async.handler");
const { get_books_list } = require("./book.controller");

router.get("/books", wrapper(get_books_list));

module.exports = router;
