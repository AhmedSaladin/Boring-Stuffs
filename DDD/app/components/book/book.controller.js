const BookDB = require("./book.mysql.db");

const bookDB = new BookDB();

module.exports = {
  get_books_list: async (req, res) => {
    const books = await bookDB.get_books_list();
    res.status(200).json(books);
  },
};
