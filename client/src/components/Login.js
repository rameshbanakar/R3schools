import React from "react";
import "./login.css"


export default function LogIn() {
  
  return (
    <div className="login">
      <div className="flexItems1">
        <div className="loginForm">
          <h5>Log in here</h5>
          <form >
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter the user E-mail"
             
              required
            />
            <br />
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              
             
              required
            />
            <br />
            <p>
              If you don't Have a account ?<a href="/signin">Click here</a>
            </p>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="submit">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flexItems2"></div>
    </div>
  );
}
