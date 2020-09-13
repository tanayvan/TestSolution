import React, { useContext } from "react";
import BaseScreen from "../components/BaseScreen";
import ProductView from "../components/ProductView";
import CartContext from "../context/CartContext";

export default function CartScreen() {
  const { cart, setCart } = useContext(CartContext);
  const totalAmount = () => {
    var total = 0;
    cart.map((cart) => {
      total = total + cart.product.price * cart.quantity;
    });
    return total;
  };
  return (
    <BaseScreen>
      <div class="container">
        <h1 className="text-center mt-5">My Cart</h1>
        <div class="row mt-5">
          <div class="col-12">
            <div class="row">
              <div class="col-md-6 col-12">
                <div>
                  {cart.map((item) => {
                    return <ProductView data={item} />;
                  })}
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="card ml-4 mb-2" style={{ width: " 18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">Total Amount to Pay</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      {`${totalAmount()} INR `}
                    </h6>
                    <button type="button" class="btn btn-success mt-3">
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </BaseScreen>
  );
}
