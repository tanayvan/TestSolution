import React, { useEffect, useState } from "react";

import BaseScreen from "../components/BaseScreen";
import illustrator from "../assests/illustration.png";
import { createProducts } from "../apicalls/apicalls";

export default function AddproductScreen() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    success: "",
    formData: "",
  });
  const {
    name,
    description,
    price,
    quantity,
    success,
    error,
    formData,
  } = values;

  useEffect(() => {
    setValues({ formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProducts(formData)
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            price: "",
            photo: "",
            quantity: "",
            success: "Product Added Successfully",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <BaseScreen>
      <div className="container mt-5">
        <h1 className="display-4 text-center">Add A Product</h1>
        <div class="row">
          <div class="col-md-6 col-12">
            <img src={illustrator} style={{ width: "100%" }} />
          </div>
          <div class="col-md-6 col-12 text-center mt-5">
            <form>
              <p style={{ color: "red", fontSize: "20px" }}>{error}</p>

              <p style={{ color: "green", fontSize: "20px" }}>{success}</p>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Product Name"
                  name="name"
                  value={name}
                  onChange={handleChange("name")}
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  placeholder="Product Description"
                  name="description"
                  value={description}
                  onChange={handleChange("description")}
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  value={quantity}
                  onChange={handleChange("quantity")}
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="number"
                  placeholder="Price"
                  name="price"
                  value={price}
                  onChange={handleChange("price")}
                />
              </div>
              <form>
                <div class="form-group">
                  <input
                    type="file"
                    className="form-control-file"
                    accept="image/*"
                    name="photo"
                    onChange={handleChange("photo")}
                  />
                </div>
              </form>
              <button
                type="submit"
                class="btn btn-dark mt-3"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </BaseScreen>
  );
}
