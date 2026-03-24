const items = require("../model/inventoryData");
let currentId = 1;

exports.createInventory = (req, res) => {
  const { name, category, quantity } = req.body;
  const item = { id: currentId++, name, category, quantity };
  items.push(item);
  res.status(201).json(item);
};
