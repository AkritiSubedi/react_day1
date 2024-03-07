// import { useState } from 'react'
// import './App.css'

// function App() {

//   return (
//     <>
      
//     </>
//   )
// }

// export default App
import React, { useState } from 'react';

const CarouselForm = () => {
  const [TitleName, setTitleName] = useState('');
  const [productInput, setProductInput] = useState('');
  const [ProductWeblink, setProductWeblink]=useState('');

  const saveForm = () => {
    alert('Form saved!');
  };

  

  return (
    <div>
      <div id="carouselHeading">
        <h2>Carousel</h2>
      </div>

      <form>
        <label htmlFor="TitleName">Title Name:</label>
        <input
          type="text"
          id="TitleName"
          name="TitleName"
          value={TitleName}
          onChange={(e) => setTitleName(e.target.value)}
          required
        />

        <label htmlFor="productInput">Product Name</label>
        <input
          type="text"
          id="productInput"
          name="productInput"
          value={productInput}
          onChange={(e) => setProductInput(e.target.value)}
          required
        />
        <label htmlFor="ProductWeblink">Product Weblink</label>
        <input
          type="text"
          id="ProductWeblink"
          name="ProductWeblink"
          value={ProductWeblink}
          onChange={(e) => setProductWeblink(e.target.value)}
          required
        />

        <button type="button" onClick={saveForm}>
          Save
        </button>
      </form>

      {/* <div>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <button>Visit Product Website</button>
        </a>
      </div> */}
    </div>
  );
};

export default CarouselForm;
