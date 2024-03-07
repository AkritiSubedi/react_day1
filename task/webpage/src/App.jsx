import { Component, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import { Body } from "./Body";
import Description from "./description";
import Footer from "./footer";
import Products from "./products";
import Imageshorting from "./Imageshorting";
import Allproduct from "./allproduct";

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <Router>
        <Navbar cart={cartCount} />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route
            path="/imageshorting"
            element={
              <Imageshorting count={cartCount} setCartCount={setCartCount} />
            }
          />
          <Route
            path="/desc"
            element={
              <Description count={cartCount} setCartCount={setCartCount} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// BOX (props)
// {
//   name:props.item.name
//   price:props.item.price
//   stock:

// }

// mostselling{
// fetch: product:3

// product.map((item,index)=>{
//   return <Box item={item}/>
// })

// }

// allProduct{
// product:13

// }
