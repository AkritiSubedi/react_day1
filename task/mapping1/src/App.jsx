import { useState } from "react";
import "./App.css";
import Mapping from "./Mapping";
import Text from "./Text";

function App() {
  // const arr = [
  //   { name: "Akriti", roll: 12, address: "Kathmandu" },
  //   { name: "Ram", roll: 2, address: "lalitpur" },
  //   { name: "Shyam", roll: 1, address: "lalitpur" },
  //   { name: "Hari", roll: 20, address: "Kathmandu" },
  //   { name: "Hari", roll: 20, address: "Kathmandu" },
  // ];
  return (
    <>
      <div className="container">
        <h1 className="heading">SHOP OUR BESTSELLERS</h1>
        <div className="secondcontainer">
          <div className="images">
            <Mapping />
          </div>
          <div className="product">
            <h1>VIEW ALL PRODUCTS</h1>
          </div>
        </div>
      </div>
      {/* <ul >
        {arr.map((nameList) => {
          if(nameList.address=="Kathmandu"&& nameList.name =="Akriti"){
            return <li>{nameList.name}{nameList.roll}</li>;
            
          }
        })}
      </ul> */}
    </>
  );
}

export default App;
