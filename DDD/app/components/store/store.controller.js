const sequelize = require("./../../db/db_connection");
const { GET_STORE_LIST, CREATE_NEW_STORE } = require("./store.query.mysql");
const Store = require("./store.model");
module.exports = {
  get_store_list: async (req, res) => {
    try {
      const data = await sequelize.query(GET_STORE_LIST, {
        type: sequelize.QueryTypes.SELECT,
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err.toString());
    }
  },
  create_new_store: async (req, res) => {
    try {
      const { name, store_code, address } = req.body;
      const store = new Store(name, store_code, address);
      await sequelize.query(CREATE_NEW_STORE, {
        type: sequelize.QueryTypes.INSERT,
        replacements: [store.storeName, store.storeCode, store.address],
      });
      res.status(200).json("created");
    } catch (err) {
      res.status(500).json(err.toString());
    }
  },
};
