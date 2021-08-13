const router = require("express").Router();
const { get_store_list } = require("./store.controller");

router.get("stores", get_store_list);

module.exports = router;
