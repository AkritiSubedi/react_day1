import { useState, useEffect } from "react";
import "./App.css";
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";

function App() {
  const [formValues, setFormValues] = useState({
    name: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (values) => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    const errors = {};

    if (!values.name) {
      errors.name = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password must contain at least one capital letter, and one number and must be 8-16 characters long.";
    }

    return errors;
  };

  const handleClick = (event) => {
    event.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  return (
    <>
      {/* <div className="container">
        <img className="img" src="/image 28.png" alt="" />
        {/* <img className="bubble" src="image 16.png" alt="" /> 
        <div className="subcontainer">
          <div className="welc">Welcome</div>
          <div className="p">
            Please enter your details to login to the admin dashboard
          </div>

          <form className="inputs" action="submit">
            <input
              className="form"
              type="text"
              id="name"
              name="name"
              placeholder="UserName"
              value={formValues.name}
              onChange={handleChange}
              required
            />
            <div className="icon">
              <CiUser />
            </div>
            {/* <br/>
            <div className="error">{formErrors.name}</div>

            <input
              className="form"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
            <div className="icon">
              <IoKeyOutline />
            </div>
            {/* <br/>
            <div className="error">{formErrors.password}</div>

            <button className="login" type="submit" onClick={handleClick}>
              Login
            </button>
            <div className="fpassword">Forgot password ?</div>
          </form>
        </div>
      </div> */}
      <div className="container">
        <div className="content-form">
          <div className="welcome-text">Welcome</div>
          <div className="long-text">
            Please enter your details to login to the admin dashboard
          </div>
          <div className="input-bar">
          <CiUser />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-bar">
            <IoKeyOutline />
            <input type="text" placeholder="Password"/>
          </div>
          <div className="login-button">Login</div>
          <div className="remember-me">Forgot Password?</div>
        </div>
      </div>
    </>
  );
}

export default App;
