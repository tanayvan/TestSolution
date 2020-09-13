import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addtoCart, getCart } from "../apicalls/apicalls";
import CartContext from "../context/CartContext";

export default function Card({ data }) {
  const { cart, setCart } = useContext(CartContext);

  const checkProduct = () => {
    const obj = cart.find((obj) => obj.product._id == data._id);
    if (obj !== undefined) {
      return true;
    }
  };

  const handleClick = () => {
    console.log(data);
    const item = {
      userId: "admin",
      product: data._id,
      quantity: 1,
    };

    addtoCart(item)
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        getCart()
          .then((data) => {
            setCart(data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div
        class="card my-5"
        style={{
          width: "18rem",
        }}
      >
        <img
          src={require(`../assests/${data.image}`)}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{data.name}</h5>
          <p class="card-text">{data.description}</p>
          <p class="card-text">{`${data.price} INR`}</p>
          {checkProduct() ? (
            <Link class="btn btn-primary" to="/cart">
              View In Cart
            </Link>
          ) : (
            <button class="btn btn-primary" onClick={handleClick}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
