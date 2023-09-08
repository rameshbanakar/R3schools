import React from "react";
import SideBar from "../SideBar";
function PythonComment() {
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
        <h2>Python Comment</h2>
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
              <p>Comments can be used to explain Python code.</p>
            </li>
            <li>
              <p>Comments can be used to make the code more readable.</p>
            </li>
            <li>
              <p>
                Comments can be used to prevent execution when testing code..
              </p>
            </li>
          </ul>
        </div>
        <h3>Creating a Comment</h3>
        <p>Comments starts with a #, and Python will ignore them:</p>
        <div className="codepart">
          <div className="codePartInside">
            <code>
              #This is a comment <br />
              print("Hello, World!")
            </code>
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
        <p>
          Comments can be placed at the end of a line, and Python will ignore
          the rest of the line:
        </p>
        <div className="codepart">
          <div className="codePartInside">
            <code>
              print("Hello, World!") #This is a comment <br />
            </code>
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
        <h3>Multiline Comments</h3>
        <p>Python does not really have a syntax for multiline comments.</p>
        <p>To add a multiline comment you could insert a # for each line:</p>

        <div className="codepart">
          <div className="codePartInside">
            <code>
              #This is a comment <br />
              #written in <br /> #more than just one line <br />
              print("Hello, World!") <br />
            </code>
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
        <p>Or, not quite as intended, you can use a multiline string.</p>
        <p>
          Since Python will ignore string literals that are not assigned to a
          variable, you can add a multiline string (triple quotes) in your code,
          and place your comment inside it:
        </p>
        <div className="codepart">
          <div className="codePartInside">
            <code>
              """ This is a comment <br />
              written in more than <br /> just one line """
              <br />
              print("Hello, World!")
            </code>
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
        <p>
          As long as the string is not assigned to a variable, Python will read
          the code, but then ignore it, and you have made a multiline comment.
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

export default PythonComment;
