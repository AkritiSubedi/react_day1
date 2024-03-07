import React, { useState, useEffect } from "react";
import "./Form.css";

function Form() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    newpassword: "",
    confirmpassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleClick(event) {
    event.preventDefault();
    setFormErrors(() => validate(formValues));

    // onclick={()=>fnc(values)}
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password must contain at least one capital letter, one special character, and one number.";
    } else if (values.password.length < 6) {
      errors.password = "password must be more than 4 characters";
    } 

    if(values.password ==values.newpassword){
      // errors.password="password must be different"
      errors.newpassword="current password and new password must be different"
    }
      else if (values.password.length < 4) {
        errors.newpassword = "password must be more than 4 characters";
        errors.confirmpassword = "password must be more than 4 characters";
      } 
    if (
      values.newpassword !== values.confirmpassword &&
      !passwordRegex.test(values.password)
    ) {
      errors.newpassword = "Passwords must match";
      errors.confirmpassword = "Passwords must match";
     
    }else if (!passwordRegex.test(values.newpassword)) {
      errors.newpassword =
        "Password must contain at least one capital letter, one special character, and one number.";
    } 

    return errors;
  };

  return (
    <>
      <div className="form">
        <div className="container">
          <form action="submit">
            <label className="name" htmlFor="name">
              Username
            </label>
            <input
              className="input-bar"
              type="text"
              id="name"
              name="name"
              placeholder=""
              value={formValues.name}
              onChange={handleChange}
            />
            <p>{formErrors.name}</p>
            <label className="email" htmlFor="email">
              Email
            </label>
            <input
              className="input-bar"
              type="email"
              id="email"
              name="email"
              placeholder=""
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <p>{formErrors.email}</p>
            <hr className="line" />
            <label className="pass" htmlFor="password">
              Password
            </label>
            <input
              className="input-bar"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Current password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
            <input
              className="input-bar"
              type="password"
              id="password-new"
              name="newpassword"
              placeholder="Enter New password"
              value={formValues.newpassword}
              onChange={handleChange}
            />
            <p>{formErrors.newpassword}</p>
            <input
              className="input-bar"
              type="password"
              id="password-confirm"
              name="confirmpassword"
              placeholder="Confirm password"
              value={formValues.confirmpassword}
              onChange={handleChange}
            />
            <p>{formErrors.confirmpassword}</p>

            <button className="messages" type="submit" onClick={handleClick}>
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
