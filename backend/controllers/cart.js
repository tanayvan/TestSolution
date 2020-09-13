const Cart = require("../models/cart");

exports.addtoCart = (req, res) => {
  // const item = new Item(req.order.item);
  const cart = new Cart(req.body);
  cart.save((err, cart) => {
    if (err) {
      return res.status(400).json({
        error: "Error Inserting Product in Cart" + err,
      });
    }
    return res.json(cart);
  });
};

exports.getCart = (req, res) => {
  Cart.find({ userId: "admin" })
    .populate("product")
    .exec((err, cart) => {
      if (err) {
        return res.status(400).json({
          error: "I Found No Orders Bro !!",
        });
      }
      res.json(cart);
    });
};

exports.updatequantity = (req, res) => {
  console.log("requested");
  Cart.findByIdAndUpdate(
    req.body._id,
    { quantity: req.body.quantity },
    { useFindAndModify: false },
    (err, cart) => {
      if (err) {
        return res.status(400).json({
          error: "Erron in Updating Quantity" + err,
        });
      }
      res.json(cart);
    }
  );
};
