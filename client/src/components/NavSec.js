import React from "react";
import { Link } from "react-router-dom";
function NavSec() {
  return (
    <div className="navsec">
      <Link to="/html/simplePrint" className="secNavbar">
        HTML
      </Link>
      <Link to="/css/simplePrint" className="secNavbar">
        CSS
      </Link>
      <Link to="/javascript/simplePrint" className="secNavbar">
        JAVASCRIPT
      </Link>
      <Link to="/Python/Simpleprint" className="secNavbar">
        PYTHON
      </Link>
      <Link to="/C++/simplePrint" className="secNavbar">
        C++
      </Link>
      <Link to="/react/simplePrint" className="secNavbar">
        REACT
      </Link>
    </div>
  );
}

export default NavSec;
