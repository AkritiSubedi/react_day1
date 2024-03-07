import React from "react";
import "./Body.css";
import Products from "./products";
import Footer from "./footer";

function Body() {
  return (
    <>
      <div className="container">
        <img className="bgimg" src="./no bg.png" alt="" />
        <div className="text">GET DRESESD AS YOUNG</div>
      </div>
      <Products />
      <div className="image1">
        <img className="img11" src="./unsplash.png" alt="" />
      </div>
    </>
  );
}

export { Body };
