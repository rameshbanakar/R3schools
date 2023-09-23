import React from 'react'
import { Link } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import { logOutUser } from './redux/Action/AuthAct';
function NavBar() {
  const isAuthenticated=useSelector(state=>state.auth.isAuthenticated)
  const dispatch=useDispatch()
  const logout=()=>{
      dispatch(logOutUser())
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h3>R3</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
      {!isAuthenticated ? (
        <Link className="nav-link loginNav" to="/login">
          login
        </Link>
      ) : (
        <Link className="nav-link loginNav" onClick={logout}>
          logout
        </Link>
      )}
    </nav>
  );
}

export default NavBar