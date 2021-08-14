const router = require("express").Router();
const { get_store_list, create_new_store } = require("./store.controller");

router.get("/stores", get_store_list).post("/stores", create_new_store);

module.exports = router;
