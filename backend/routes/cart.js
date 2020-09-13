const express = require("express");
const router = express.Router();

const { addtoCart, getCart, updatequantity } = require("../controllers/cart");

router.post("/addtocart", addtoCart);
router.get("/getCart", getCart);
router.post("/cart/updatequantity", updatequantity);

module.exports = router;
