// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import pi , {doublePi, triplePi} from './math'

// function App() {
//   return (
//     <>
//      {/* <ul>
//       <li>{pi}</li>
//       <li>{doublePi()}</li>
//       <li>{triplePi()}</li>
//       </ul>  */}
//     </>
//   )
// }

// export default App1

import React from "react";
import ReactDOM from "react-dom";
import *as math from "./math";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import App from "./App"

function App() {
  return (
    <>
      {/* <ul>
        <li>{math.add(111, 52)}</li>
        <li>{math.multiply(22, 63)}</li>
        <li>{math.subtract(77, 52)}</li>
      </ul> */}
      <Header/>
      <Footer/>
      <Note/>
    </>
  );
}
export default App;
