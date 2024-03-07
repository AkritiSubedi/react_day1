import React from "react";
import Text from "./Text";
function Mapping(){
    return(
        <>
        {Text.map((value,index)=>(
            <div className="img1">
              <img className="img" src={value.img} alt="" />
              <p className="p">
                {value.paragraph}
              </p>
              <h4>
                {value.description}
              </h4>
            </div>
       ) )}
        </>
    )
}
export default Mapping