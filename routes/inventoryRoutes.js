const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");
const validateItem = require("../middleware/validation");

router.post("/", validateItem, inventoryController.createInventory);
router.get("/", inventoryController.getAllItems);
router.get("/:id", inventoryController.getItemById);
router.put("/:id", validateItem, inventoryController.updateItemById);

module.exports = router;
