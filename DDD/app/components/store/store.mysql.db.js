const sequelize = require("../../db/mysql.db.connection");

module.exports = class StoreDB {
  async get_stores_list() {
    return await sequelize.query("SELECT * FROM stores", {
      type: sequelize.QueryTypes.SELECT,
    });
  }

  async add_new_store(store) {
    await sequelize.query(
      `INSERT INTO stores (name,st_code,address) values (?,?,?)`,
      {
        type: sequelize.QueryTypes.INSERT,
        replacements: [store.storeName, store.storeCode, store.address],
      }
    );
  }
};
