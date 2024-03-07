import React from 'react'
import './App.css'

function strike(){
  document.getElementById("root").style.textDecoration ="line-through";
}
function App() {
  // // Declarative programming state

  // var isDone = true;

  // const strikeThrough = {textDecoration: "line-through"};
  // return ( <p style = {isDone ? strikeThrough : null}>Buy Milk</p>
  // );

  return(
    <div>

    <p> Buy Milk</p>
    <button onCLick={strike} >Change to strike through</button>
    </div>
  )
}

export default App
