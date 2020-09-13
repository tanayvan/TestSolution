const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    product: {
      type: ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Cart", CartSchema);
