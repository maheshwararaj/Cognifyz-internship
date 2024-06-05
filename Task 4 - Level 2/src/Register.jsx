import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const onChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(password);

    const minLengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()]/;

    const isMinLength = minLengthRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasDigit = digitRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);

    if (
      isMinLength &&
      hasUppercase &&
      hasLowercase &&
      hasDigit &&
      hasSpecialChar
    ) {
      navigate("/todolist");
    } else {
      alert("Password too weak. Include uppers lowers digits and symbols");
    }
  };

  return (
    <div className="register">
      {/* <form action="" onSubmit={onSubmitHandler}>
            <input type="text"  id="name" placeholder='Name' />
            <input type="email" id='email' placeholder='Email' />
            <input type="text" onChange={onChangeHandler} value={password} id='password' placeholder='Password' />
            <button type='submit'>Submit</button>
        </form> */}
      <div class="form-box">
        <form class="form" onSubmit={onSubmitHandler}>
          <span class="title">Sign in</span>
          <span class="subtitle"> Login or Create Account</span>
          <div class="form-container">
            <input type="text" class="input" placeholder="Full Name" />
            <input type="email" class="input" placeholder="Email" />
            <input type="password"  onChange={onChangeHandler} value={password} class="input" placeholder="Password" />
          </div>
          <button type="submit">Sign In</button>
        </form>
        
      </div>
    </div>
  );
};

export default Register;
