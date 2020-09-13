import React from "react";
import { Link, withRouter } from "react-router-dom";

function BaseScreen({ children, history }) {
  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return {
        color: "#ed1c24",
      };
    } else {
      return {};
    }
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Kabra Logistics
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/" style={currentTab(history, "/")}>
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/product/add"
                style={currentTab(history, "/product/add")}
              >
                Add a Product
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/cart"
                style={currentTab(history, "/cart")}
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {children}
    </div>
  );
}

export default withRouter(BaseScreen);
