import React from "react";
function Heading(){
    const name="Akriti"
    const surname="Subedi"
    const num ="7"
    const currentDate = new Date();
    const year =currentDate.getFullYear();
    const date = new Date(2019, 1, 1, 14);
    const currentTime = date.getHours();
  
  
    let greeting;
    const customStyle = {
      color:""
    };
  
    if(currentTime <12){
      greeting = "Good Morning"
      customStyle.color ="red";
    }else if(currentTime<18){
      greeting = "Good Afternoon"
      customStyle.color ="green";
    }else{
      greeting = "Good Night"
      customStyle.color ="blue";
    }
  
    return (
      <>
      <h1 className='heading' style={customStyle}>{greeting}</h1>
      <h1> My Favourite Foods</h1>
      <ul>
        <li>Noodle</li>
        <li>Jamon</li>
      </ul>
      <h1 style={{color: "red"}}>Hello {name +" "+ surname}</h1>
      <p>Your lucky number is {num}</p>
      <p>Copyright {year}</p>
      
      </>
    );
}
export default Heading;
