const items = require("../model/inventoryData");
let currentId = 1;

exports.createInventory = (req, res) => {
  const { name, category, quantity } = req.body;
  const item = { id: currentId++, name, category, quantity };
  items.push(item);
  res.status(201).json(item);
};

exports.getAllItems = (req, res) => {
  const { search } = req.query;
  if (search) {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
    return res.json(filteredItems);
  }
  res.json(items);
};

exports.getItemById = (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));

  if (!item) return res.status(404).send("Item not found");
  res.json(item);
};
