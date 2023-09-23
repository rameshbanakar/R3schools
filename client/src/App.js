import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import NavSec from "./components/NavSec";
import Home from "./components/Home";
import SimplePrint from "./components/python/SimplePrint";
import LogIn from "./components/Login";
import SignIn from "./components/SignIn";
import PythonComment from "./components/python/PythonComment";
import PythonVariable from "./components/python/PythonVariable";
import { setAuth } from "./components/redux/Action/AuthAct";
import SetLoader from "./components/SetLoader";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loader = useSelector((state) => state.loader.loading);
  console.log("from app file -->", isAuthenticated);
  if (localStorage.getItem("token")) {
    localStorage.setItem("token", localStorage.getItem("token"));
    dispatch(setAuth());
  }
  return (
    <BrowserRouter>
      <div className="NavbarFix">
        <NavBar />
        <NavSec />
      </div>
      {/* <div className="secNavbar"></div> */}
      {loader ? (
        <SetLoader />
      ) : (
        <div className="appMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Python/Simpleprint"
              element={
                !isAuthenticated ? (
                  <Navigate to="/login" replace={true} />
                ) : (
                  <SimplePrint />
                )
              }
            />
            <Route
              path="/Python/Comment"
              element={
                !isAuthenticated ? (
                  <Navigate to="/login" replace={true} />
                ) : (
                  <PythonComment />
                )
              }
            />
            <Route
              path="/Python/Variable"
              element={
                !isAuthenticated ? (
                  <Navigate to="/login" replace={true} />
                ) : (
                  <PythonVariable />
                )
              }
            />
            <Route
              path="/login"
              element={
                isAuthenticated ? <Navigate to="/" replace={true} /> : <LogIn />
              }
            />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
