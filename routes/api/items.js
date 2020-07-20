const router = require("express").Router();
const itemsController = require("../../controllers/items");

// Matches with "/api/items"
router.route("/").post(itemsController.save);
router.route("/").get(itemsController.get);

module.exports = router;
