import React, { useContext } from "react";
import { getCart, updateQuantity } from "../apicalls/apicalls";
import CartContext from "../context/CartContext";

export default function ProductView({ data }) {
  const { cart, setCart } = useContext(CartContext);

  const handlePlus = () => {
    console.log(data.quantity + 1);
    if (data.quantity < data.product.quantity) {
      updateQuantity({
        _id: data._id,
        quantity: data.quantity + 1,
      })
        .then((data) => {
          console.log(data);
          getCart().then((data) => {
            setCart(data);
          });
        })
        .catch((err) => console.log(err));
    }
  };
  const handleMinus = () => {
    console.log(data.quantity + 1);
    if (data.quantity > 1) {
      updateQuantity({
        _id: data._id,
        quantity: data.quantity - 1,
      })
        .then((data) => {
          console.log(data);
          getCart().then((data) => {
            setCart(data);
          });
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="container">
      <div class="row my-3">
        <div class="col-md-4 col-6">
          <img
            src={require(`../assests/${data.product.image}`)}
            style={{ width: "100%" }}
            className="mt-3"
          />
        </div>
        <div class="col-md-8 col-6">
          <h5 className="">{data.product.name}</h5>
          <p>{`Quantity : ${data.product.quantity}`}</p>
          <h5>{`${data.product.price} Rs`}</h5>
          <button className="btn" onClick={handleMinus}>
            <img
              src={require("../assests/icons/minus-solid.svg")}
              style={{ width: "15px" }}
            />
          </button>
          <span className="mx-3">{data.quantity}</span>
          <button className="btn" onClick={handlePlus}>
            <img
              src={require("../assests/icons/plus-solid.svg")}
              style={{ width: "15px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
