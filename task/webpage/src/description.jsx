import React, { useState, useEffect } from "react";
import axios from "axios";
import "./description.css";
import Products from "./products";

function Description(props) {
  const [data, setData] = useState([]);
  const [firstPage, setFirstPage] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setFirstPage(res.data.slice(0, 1));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="maincont">
      <div className="dcont">
        {firstPage.map((value, index) => (
          <div className="dcont1">
            <div className="banner-image-container">
              <img className="img1" src={value.image} />
            </div>

            <div className="body">
              <div className="maintxt">
                <div className="name">{value.title}</div>
                <div className="price1">{value.price}</div>
                <div className="desc">{value.description}</div>
                <div className="sectxt">
                  <div className="buy">Buy Now</div>
                  <div
                    className="cart"
                    onClick={() => props.setCartCount(props.count + 1)}
                  >
                    Add To Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Products />
    </div>
  );
}

export default Description;
