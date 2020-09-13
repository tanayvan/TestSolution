import React, { useEffect, useState } from "react";
import { getCart } from "./apicalls/apicalls";
import CartContext from "./context/CartContext";

import Routes from "./Routes";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart()
      .then((data) => {
        setCart(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Routes />
    </CartContext.Provider>
  );
}

export default App;
