import React from "react";
import SideBar from "../SideBar";

function SimplePrint() {
  return (
    <div className="flexBox" style={{ backgroundColor: "rgb(61, 64, 62)" }}>
      <div
        style={{
          width: "15%",
          "overflow-y": "scroll",
          height: "87.5vh",
          borderRight: "2px solid black",
        }}
      >
        <SideBar />
      </div>

      <div
        className="homeDetails"
        style={{ backgroundColor: "rgb(61, 64, 62)", color: "white" }}
      >
        <h2>Python Programming</h2>
        <button type="button" className="btn btn-dark">
          Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          style={{ float: "right", marginRight: "20px" }}
        >
          Next
        </button>
        <div className="card" style={{ color: "black" }}>
          <ul>
            <li>
              <p>Python is a popular programming language.</p>
            </li>
            <li>
              <p>Python can be used on a server to create web applications.</p>
            </li>
          </ul>
        </div>
        <p>
          whenever user want to write something on screen <b>"print"</b> keyword
          will be used
        </p>
        <div className="codepart">
          <div className="codePartInside">
            <code>print("Hello world!")</code>
          </div>
          <a
            href="https://www.programiz.com/python-programming/online-compiler/"
            className="btn btn-primary "
            tabindex="-1"
            role="button"
            aria-disabled="true"
            target="_blank"
          >
            Try Yourself
          </a>
        </div>
        <h4>Python File Handling</h4>
        <p>
          In our File Handling section you will learn how to open, read, write,
          and delete files.
        </p>
        <br />
        <h4>Python Database Handling</h4>
        <p>
          In our database section you will learn how to access and work with
          MySQL and MongoDB databases:
        </p>
        <button type="button" className="btn btn-dark">
          Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          style={{ float: "right", marginRight: "20px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SimplePrint;
