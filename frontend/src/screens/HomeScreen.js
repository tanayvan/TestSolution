import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../assests/animation/23840-machool-delivery-truck.json";

import { getallproducts } from "../apicalls/apicalls";
import BaseScreen from "../components/BaseScreen";
import Card from "../components/Card";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getallproducts()
      .then((data) => {
        console.log(data);
        if (data) {
          setData(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <BaseScreen>
        <div>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={400}
            width={400}
            isStopped={!loading}
          />
        </div>
      </BaseScreen>
    );
  }
  if (data.length == 0) {
    return (
      <BaseScreen>
        <div class="container">
          <h1 className="text-center mt-5 display-4">Our Products</h1>

          <p>
            There are no products yet.{" "}
            <span>
              {" "}
              <Link to="/product/add">Add Here</Link>
            </span>
          </p>
        </div>
      </BaseScreen>
    );
  }
  return (
    <BaseScreen>
      <div class="container">
        <h1 className="text-center mt-5 display-4">Our Products</h1>

        <div class="row mt-5">
          {data.map((item) => {
            return (
              <div class="col-lg-4 col-md-6 col-12 ">
                <Card data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </BaseScreen>
  );
}
