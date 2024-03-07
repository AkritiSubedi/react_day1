import React, { useState } from "react";
import Btn from "./Btn";
import './App.css'
const Home = () => {
  const [value, setValue] = useState(10);

  return (
    <>
      <h1>{value}</h1>

      <button onClick={() => setValue(value + 1)}>Click me</button>

      <div className="maincontainer">
        <div className="section1">
          <h1>Akriti Subedi</h1>

          <div className="section2">
            <img src="image/img.png" alt="" className="img" />
            <div className="section3">
              <p>Hello, my name is Akriti Subedi.I'm from kalanki kathmandu</p>
              <div className="section4">
                <div className="posts">
                  <h1>243</h1>
                  <p>Posts</p>
                </div>
                <div className="followers">
                  <h1>457</h1>
                  <p>Followers</p>
                </div>
                <div className="following">
                  <h1>229</h1>
                  <p>Following</p>
                </div>
              </div>
            </div>
            <div className="button">
              <Btn text={"message"} />
              <Btn text={"Follow"} />

              {/* <button className="follow">Follow</button>
              <button className="mess">Message</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
