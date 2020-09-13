const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

//Middlewares

app.use(bodyParser.json({ limit: "5mb" }));
app.use(cors());

// database connection
mongoose
  .connect("mongodb://localhost:27017/KabraLogistics", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((err) => {
    console.log(`There is an error connnecting to database  :${err} `);
  });

const port = 8000 || process.env.Port;

//my Routes
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

app.listen(port, () => {
  console.log(`Server Has Started on ${port}`);
});
