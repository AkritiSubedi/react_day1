// (import React from "react";
// import ReactDOM from "react-dom";
// import "./App.css";
// import Card from "./Card";

// function App() {
//   return (
//     <>
//       <h1>My Contacts</h1>
//       <Card
//         name="Beyonce"
//         img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//         tel="+123 456 789"
//         email="b@beyonce.com"
//       />
//       <Card
//         name = "Jack Bauer"
//         img="./public/vite.svg"
//         tel="+123 456 789"
//         email="jack@baucer.com"
//       />
//     </>
//   );
// }
// export default App;
//)
import React from "react";
import './App.css'
import Card from "./Card";
import Contacts from "./Contact";

function App() {
  console.log(Contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
      name = {Contacts[0].name}
      img={Contacts[0].imgURL}
      tel ={Contacts[0].tel}
      email = {Contacts[0].email}
      />
      <Card
      name = {Contacts[1].name}
      img={Contacts[1].imgURL}
      tel ={Contacts[1].tel}
      email = {Contacts[1].email}
      />
      <Card
      name = {Contacts[2].name}
      img={Contacts[2].imgURL}
      tel ={Contacts[2].tel}
      email = {Contacts[2].email}
      />
    </div>
  );
}

export default App; 
