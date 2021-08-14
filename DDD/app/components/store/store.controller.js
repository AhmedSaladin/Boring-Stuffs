const StoreDB = require("./store.mysql.db");
const Store = require("./store.validation");

const storeDB = new StoreDB();

module.exports = {
  get_stores_list: async (req, res) => {
    const data = await storeDB.get_stores_list();
    res.status(200).json(data);
  },

  add_new_store: async (req, res) => {
    const { name, store_code, address } = req.body;
    const store = await Store(name, store_code, address);
    await storeDB.add_new_store(store);
    res.status(200).json("created");
  },
};
