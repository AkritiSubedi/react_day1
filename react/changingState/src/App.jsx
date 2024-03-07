import React, { useState } from "react";
import './App.css'
function App() {
  const [fName, setFName]= useState("");
  const [lName, setLName]= useState("");

  function updateFName(event){
    const firstname = event.target.value;
    setFName(firstname);
  }
  function updateLName(event){
    const lastname = event.target.value;
    setLName(lastname);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input name="fName" onChange={updateFName} placeholder="First Name" value={fName}/>
        <input name="lName" onChange={updateLName} placeholder="Last Name" value={lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
