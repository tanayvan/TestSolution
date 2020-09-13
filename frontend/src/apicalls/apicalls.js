exports.getallproducts = () => {
  return fetch("http://localhost:8000/api/product/getAllProduct", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

exports.createProducts = (product) => {
  return fetch("http://localhost:8000/api/product/create", {
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
  return fetch("http://localhost:8000/api/addtocart", {
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
  return fetch("http://localhost:8000/api/getCart", {
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
  return fetch("http://localhost:8000/api/cart/updatequantity", {
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
