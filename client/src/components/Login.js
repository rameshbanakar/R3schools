import React ,{useState}from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/Action/AuthAct";
import "./login.css"


export default function LogIn() {
  const dispatch=useDispatch()
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const changed=(e)=>{
     setData({ ...data, [e.target.name]: e.target.value });
  }
  const submitted=(e)=>{
      e.preventDefault();
      dispatch(login(data))
      setData({email:"",password:""})
  }
  return (
    <div className="login">
      <div className="flexItems1">
        <div className="loginForm">
          <h5>Log in here</h5>
          <form onSubmit={submitted}>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter the user E-mail"
              onChange={changed}
              value={data.email}
              required
            />
            <br />
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={changed}
              value={data.password}
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
