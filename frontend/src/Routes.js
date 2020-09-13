import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddproductScreen from "./screens/AddproductScreen";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/product/add" exact component={AddproductScreen} />
        <Route path="/cart" exact component={CartScreen} />
      </Switch>
    </BrowserRouter>
  );
}
