import { useState } from "react";
import React from "react";
import Login from "./login";
import "./App.css";
import Form from "./form";

// var isloggedIn = false;

// const currentTime = new Date(2019, 11, 1, 19).getHours();

// console.log(currentTime);

// function App() {
//   return (
//     <div className="container">{
//       /* {isloggedIn === true ? <h1>Hello</h1> : <Login />} */
//       currentTime >12 ? <h1>Why are you still Working ?</h1> :null
//       }</div>
//   )

// }


//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
var userIsRegistered = false;

function App(){
  return(
    <div className="container">
      <Form isRegistered = {userIsRegistered}
      />
    </div>
  )
}

export default App;
