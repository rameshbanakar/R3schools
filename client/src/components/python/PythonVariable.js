import React from 'react'
import SideBar from "../SideBar";
function PythonVariable() {
  return (
    <div className="flexBox" style={{ backgroundColor: "rgb(61, 64, 62)" }}>
      <div
        style={{
          width: "15%",
          overflowY: "scroll",
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
        <h2>Python Variables</h2>
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
        <div
          style={{
            borderBottom: "1px solid white",
            margin: "20px",
            marginLeft: "0px",
          }}
        ></div>
        <h3>Variables</h3>
        <p>Variables are containers for storing data values.</p>
        <h3>Creating Variables</h3>
        <p>
          Python has no command for declaring a variable. A variable is created
          the moment you first assign a value to it.
        </p>

        <div className="codepart">
          <div className="codePartInside">
            <code>
              x = 5 <br /> y = "John" <br /> print(x) <br />
              print(y)
            </code>
          </div>
          <a
            href="https://www.programiz.com/python-programming/online-compiler/"
            className="btn btn-primary "
            tabIndex="-1"
            role="button"
            aria-disabled="true"
            target="_blank"
          >
            Try Yourself
          </a>
        </div>

        <p>
          Variables do not need to be declared with any particular type, and can
          even change type after they have been set.
        </p>
        <br />
        <div className="codepart">
          <div className="codePartInside">
            <code>
              x = 4 <br /> # x is of type int <br /> x = "Sally" <br /> # x is
              now of type str <br />
              print(x)
            </code>
          </div>
          <a
            href="https://www.programiz.com/python-programming/online-compiler/"
            className="btn btn-primary "
            tabIndex="-1"
            role="button"
            aria-disabled="true"
            target="_blank"
          >
            Try Yourself
          </a>
        </div>
        <div
          style={{
            borderBottom: "1px solid white",
            margin: "20px",
            marginLeft: "0px",
          }}
        ></div>
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

export default PythonVariable