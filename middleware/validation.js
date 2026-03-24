const validateItem = (req, res, next) => {
  const { name, category, quantity } = req.body;

  if (!name || !category || !quantity) {
    return res.status(400).send("name, category and quantity are required");
  }
  next();
};

module.exports = validateItem;
