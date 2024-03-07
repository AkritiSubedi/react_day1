import React from "react";
import "./App.css";
import Form from "./form";

function Contactus() {
  return (
    <>
      <div className="maincontainer">
        <div className="secondcontainer">
          <div className="svg1">
            <img className="svg11" src="../Group 68.svg" alt="" />
            <img className="img" src="../image 7.png" alt="" />
            <img className="svg12" src="../Group 69.svg" alt="" />
            <img src="../mdi_location.svg" alt="" />
            <img src="../mingcute_phone-fill.svg" alt="" />
            <div className="info-icons">
              <div className="info-icon">
                <img src="../public/mdi_location.svg" alt="" />
                <i className="add">Address</i>
                <p className="sub">Somewhere</p><br></br><br></br>
                <img src="mingcute_phone-fill.svg" alt="" />
                <i className="add">Lets Talk</i>
                <p className="sub">+97746556453</p><br></br><br></br>
                <img src="mdi_email.svg" alt="" />
                <i className="add">General Support</i>
                <p className="sub">something@email.com</p>
              </div>
              <div className="media">
                <img className="insta" src="../public/mdi_instagram.svg" alt="" />
                <img className="face" src="../public/ic_baseline-facebook.svg" alt="" />
                <img src="../pajamas_twitter.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="thirdcontainer">
          <h1>Keep in touch</h1>
          <h5>If any queries or feedback feel free contact us.</h5>
          <img className="vector" src="/vector.svg" alt="" />
         <Form/>
        </div>
      </div>
    </>
  );
}

export default Contactus;
