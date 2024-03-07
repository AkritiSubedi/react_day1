import React from "react";
import "./App.css";
import Card from "./Card";
import Contacts from "./Contacts";
import Avatar from "./Avatar";


function createCard(Contact) {
  return (
  <Card 
  id={Contact.id}
  key={Contact.id}
  name ={Contact.name} 
  img={Contact.img}
  tel={Contact.phone}
  email={Contact.email}
  />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map(createCard)}
      {/* <Card
        name={Contacts[0].name}
        img={Contacts[0].img}
        tel={Contacts[0].tel}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        img={Contacts[1].img}
        tel={Contacts[1].tel}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].img}
        tel={Contacts[2].tel}
        email={Contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
