const { API } = require("../backend");

exports.getallproducts = () => {
  return fetch(`${API}/product/getAllProduct`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

exports.createProducts = (product) => {
  return fetch(`${API}/product/create`, {
    method: "Post",
    headers: {
      Accept: "application/json",
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

exports.addtoCart = (cartProduct) => {
  console.log(cartProduct);
  return fetch(`${API}/addtocart`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(cartProduct),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

exports.getCart = () => {
  return fetch(`${API}/getCart`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateQuantity = (data) => {
  console.log(data);
  return fetch(`${API}/cart/updatequantity`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
