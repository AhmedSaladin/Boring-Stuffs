const StoreDB = require("./store.mysql.db");
const Store = require("./store.model");

const storeDB = new StoreDB();

module.exports = {
  get_stores_list: async (req, res) => {
    try {
      const data = await storeDB.get_stores_list();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err.toString());
    }
  },

  add_new_store: async (req, res) => {
    try {
      const { name, store_code, address } = req.body;
      const store = new Store(name, store_code, address);
      await storeDB.add_new_store(store);
      res.status(200).json("created");
    } catch (err) {
      res.status(500).json(err.toString());
    }
  },
};
