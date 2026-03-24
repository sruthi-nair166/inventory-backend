require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const inventoryRoutes = require("./routes/inventoryRoutes");
const errorHandler = require("./middleware/errorHandler");

app.use("/items", inventoryRoutes);
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running in ${port}`);
});
