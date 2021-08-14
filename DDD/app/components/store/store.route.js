const router = require("express").Router();
const { get_stores_list, add_new_store } = require("./store.controller");

router.get("/stores", get_stores_list).post("/stores", add_new_store);

module.exports = router;
