const BookDB = require("./book.mysql.db");
const Book = require("./book.model");

const bookDB = new BookDB();

module.exports = {
  get_books_list: async (req, res) => {
    const books = await bookDB.get_books_list();
    res.status(200).json(books);
  },
  add_new_book: async (req, res) => {
    const { body } = req;
    const book = await Book(body);
    await bookDB.add_new_book(book, "a12");
    res.status(201).json("created");
  },
};
