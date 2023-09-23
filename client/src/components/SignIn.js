import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { signup } from "./redux/Action/AuthAct";
import "./signin.css"
export default function SignIn() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const changed = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitted = (e) => {
    e.preventDefault();
    dispatch(signup(data));
  };
  return (
    <div>
      <form onSubmit={submitted} className="signInPage">
        <h3>Sign In</h3>
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          name="firstName"
          value={data.firstName}
          onChange={changed}
          required
        />
        <br />

        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={changed}
        />
        <br />
        <input
          type="email"
          className="form-control"
          placeholder="E-mail"
          name="email"
          value={data.email}
          onChange={changed}
          required
        />
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={changed}
          required
        />
        <br />
        <p>
          If you have account <a href="/login">click here</a>
        </p>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
