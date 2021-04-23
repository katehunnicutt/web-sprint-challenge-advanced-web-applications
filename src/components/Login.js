import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router";

const initialValues = {
  username: "",
  password: "",
  error: "Username or Password not valid",
};

const Login = () => {
  const [loginValues, setLoginValues] = useState(initialValues);
  const {push} = useHistory()
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route



  //const error = "";
  //replace with error state
  const handleChanges = e => {
    setLoginValues({
      //spread in state
      ...loginValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
    .post("http://localhost:5000/api/login", loginValues)
    .then(res => {
      console.log(res.data, 'myeh', res, 'yuu', res.data.payload)
      window.localStorage.setItem("token", res.data.payload)
      push("/private-route")
    })
    .catch(err => console.log( err, 'ih', err.res, 'hi'))

  }
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            data-testid="username"
            value={loginValues.username}
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChanges}
          />
          <label>Password</label>
          <input
            data-testid="password"
            value={loginValues.password}
            name="password"
            type="text"
            placeholder="password"
            onChange={handleChanges}
          />
          <button>Login</button>
        </form>
      </div>

      <div data-testid="errorMessage" className="error" >
        {
        loginValues.username === "" || loginValues.password === "" &&
        <p> {loginValues.error} </p>
        }
      </div>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
