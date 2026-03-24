const express = require("express");
const app = express();
app.use(express.json());
const inventoryRoutes = require("./routes/inventoryRoutes");

app.use("/items", inventoryRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`server running in ${port}`);
});
