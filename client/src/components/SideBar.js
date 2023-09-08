import React from "react";
import "./sideBar.css"
import { Link } from "react-router-dom";
function SideBar() {
    const listOfOpt = ["Simple print", "Python Comment"];
  
  return (
    <div className="sideNavBar">
      {listOfOpt.length > 0 ? listOfOpt.map((each)=>(
        
        <Link to="/pyhton/" className="sidebar" key={listOfOpt.indexOf(each)}>
          {each}<br/>
        </Link>
     
      )) : <p>no options</p>}
      <Link to="/pyhton/simplePrint" className="sidebar">
        Simple print
      </Link>
      <br />
      <Link to="/pyhton/comment" className="sidebar">
        Python Comment
      </Link>
      <br />
      <Link to="/pyhton/variable" className="sidebar">
        Python Variable
      </Link>
      <br />
      <Link to="/pyhton/dataTypes" className="sidebar">
        Python Data Types
      </Link>
      <br />
      <Link to="/pyhton/number" className="sidebar">
        Python Number
      </Link>
      <br />
      <Link to="/pyhton/casting" className="sidebar">
        Python Casting
      </Link>
      <br />
      <Link to="/pyhton/string" className="sidebar">
        Python Strings
      </Link>
      <br />
      <Link to="/pyhton/booleans" className="sidebar">
        Python Booleans
      </Link>
      <br />
      <Link to="/pyhton/operator" className="sidebar">
        Python Operators
      </Link>
      <br />
      <Link to="/pyhton/lists" className="sidebar">
        Python List
      </Link>
      <br />
      <Link to="/pyhton/tuples" className="sidebar">
        Python Tuples
      </Link>
      <br />
      <Link to="/pyhton/sets" className="sidebar">
        Python Sets
      </Link>
      <br />
      <Link to="/pyhton/dictonaries" className="sidebar">
        Python Dictionaries
      </Link>
      <br />
      <Link to="/pyhton/ifelse" className="sidebar">
        Python if...else
      </Link>
      <br />
      <Link to="/pyhton/while" className="sidebar">
        Python while Loops
      </Link>
      <br />
      <Link to="/pyhton/forloop" className="sidebar">
        Python For Loop
      </Link>
      <br />
      <Link to="/pyhton/functions" className="sidebar">
        Python Functions
      </Link>
      <br />
      <Link to="/pyhton/lambda" className="sidebar">
        Python Lambda
      </Link>
      <br />
      <Link to="/pyhton/array" className="sidebar">
        Python Array
      </Link>
      <br />
      <Link to="/pyhton/class" className="sidebar">
        Python class/Objects
      </Link>
      <br />
      <Link to="/pyhton/inheritance" className="sidebar">
        Python Inheritance
      </Link>
      <br />
      <Link to="/pyhton/iterators" className="sidebar">
        Python Iterators
      </Link>
      <br />
      <Link to="/pyhton/scops" className="sidebar">
        Python Scops
      </Link>
      <br />
      <Link to="/pyhton/module" className="sidebar">
        Python Modules
      </Link>
      <br />
      <Link to="/pyhton/data" className="sidebar">
        Python Dates
      </Link>
      <br />
      <Link to="/pyhton/math" className="sidebar">
        Python Math
      </Link>
      <br />
      <Link to="/pyhton/json" className="sidebar">
        Python JSON
      </Link>
      <br />
      <Link to="/pyhton/regex" className="sidebar">
        Python RegEx
      </Link>
      <br />
      <Link to="/pyhton/pip" className="sidebar">
        Python PIP
      </Link>
      <br />
      <Link to="/pyhton/tryexcept" className="sidebar">
        Python Try...Except
      </Link>
      <br />
      <Link to="/pyhton/userInput" className="sidebar">
        Python user Input
      </Link>
      <br />
      <br />
      <p>File Handling</p>
    </div>
  );
}

export default SideBar;
