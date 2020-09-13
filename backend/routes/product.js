const express = require("express");
const router = express.Router();

const { createProduct, getProducts } = require("../controllers/product");

router.post("/product/create", createProduct);
router.get("/product/getAllProduct", getProducts);

module.exports = router;
