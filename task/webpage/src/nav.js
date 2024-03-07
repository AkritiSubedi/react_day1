import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { IoCartOutline } from "react-icons/io5";
import { Body } from "./Body";
import Footer from "./footer";
import { useSelector } from "react-redux";

function Navbar(props) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        =
      </div>
      {show ? (
        <div className="slidebar">
          <div className="hamburger" onClick={() => setShow(!show)}>
            =
          </div>
          <NavLink to="/">
            <li className="li">Home</li>
          </NavLink>
          {/* Add other links here */}
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
// https://www.youtube.com/watch?v=DP9vgjYTdgQ