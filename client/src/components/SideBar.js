import React from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";
function SideBar() {
  const listOfOpt = [
    "Python Simpleprint",
    "Python Comment",
    "Python Variable",
    "Python DataTypes",
    "Python Number",
    "Python Casting",
    "Python Strings",
    "Python Booleans",
    "Python Operators",
    "Python List",
    "Python Tuples",
    "Python Sets",
    "Python Dictionaries",
    "Python if...else",
    "Python whileLoops",
    "Python ForLoop",
    "Python Functions",
    "Python Lambda",
    "Python Array",
    "Python class/Objects",
    "Python Inheritance",
    "Python Iterators",
    "Python Scops",
    "Python Modules",
    "Python Dates",
    "Python Math",
    "Python JSON",
    "Python RegEx",
    "Python PIP",
    "Python Try...Except",
    "Python user Input",
    "",
  ];

  return (
    <div className="sideNavBar">
      {listOfOpt.length > 0 ? (
        listOfOpt.map((each) => (
          <Link
            to={"/" + each.replace(" ", "/")}
            className="sidebar"
            key={listOfOpt.indexOf(each)}
          >
            {each}
            <br />
          </Link>
        ))
      ) : (
        <p>no options</p>
      )}
    </div>
  );
}

export default SideBar;
