const sequelize = require("../../db/mysql.db.connection");

module.exports = class StoreDB {
  async get_all_books() {
    return await sequelize.query("SELECT * FROM books", {
      type: sequelize.QueryTypes.SELECT,
    });
  }
};
