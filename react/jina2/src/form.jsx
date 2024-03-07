import React from 'react'
import "./Form.css"

function Form () {

  return (
    <>
    <div className="form">
          <form action="submit">
            
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="Full name" />

            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="Email" />

            <label htmlFor="contact"></label>
            <input type="contact" id="contact" name="contact" placeholder="Contact Number" />

            <label htmlFor="message"></label>
            <textarea id="message" name="message" placeholder="Your Message"></textarea>

            <button  className="messages" type="submit">Send message</button>
          </form>
        </div>

    </>
  )
}

export default Form