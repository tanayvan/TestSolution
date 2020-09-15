import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

import { addtoCart, getCart } from "../apicalls/apicalls";
import CartContext from "../context/CartContext";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Card({ data }) {
  const { cart, setCart } = useContext(CartContext);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.wobbly,
  }));

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
    <animated.div
      class="card my-5"
      style={{ transform: props.xys.interpolate(trans), width: "18rem" }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
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
    </animated.div>
  );
}
