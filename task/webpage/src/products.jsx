import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import Allproduct from "./allproduct";

function Products() {
  const [data, setData] = useState([]);
  const [firstPage, setFirstPage] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  function handleCart(id) {
    setCart((prev) => [...prev, id]);
    setCartCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    console.log(cart);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setFirstPage(res.data.slice(0, 3));
      })
      .catch((err) => console.log(err));
  }, [cart]);

  return (
    <div className="product">
      <h1 className="h1">Most Sellings</h1>
      {firstPage.map((value, index) => (
        <div className="products">
          <Allproduct
            value={value}
            key={index}
            onClick={() => handleCart(value.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Products;
