import React from "react";
import SideBar from "../SideBar";
function DataTypes() {

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
        <h2>Python Data Types</h2>
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
        <h3>Built-in Data Types</h3>
        <p>In programming, data type is an important concept. </p>
        <p>
          Variables can store data of different types, and different types can
          do different things.{" "}
        </p>
        <p>
          Python has the following data types built-in by default, in these
          categories:
        </p>
        <table>
          <tr>
            <td>Text Type:</td>
            <td style={{ color: "red" }}>str</td>
          </tr>
          <tr>
            <td>Numeric Types:</td>
            <td style={{ color: "red" }}>int, float, complex</td>
          </tr>
          <tr>
            <td>Sequence Types:</td>
            <td style={{ color: "red" }}>list, tuple, range</td>
          </tr>
          <tr>
            <td>Mapping Type:</td>
            <td style={{ color: "red" }}>dict</td>
          </tr>
          <tr>
            <td>Set Types:</td>
            <td style={{ color: "red" }}> set, frozenset</td>
          </tr>
          <tr>
            <td>Boolean Type:</td>
            <td style={{ color: "red" }}> bool</td>
          </tr>
          <tr>
            <td>Binary Types:</td>
            <td style={{ color: "red" }}> bytes, bytearray, memoryview</td>
          </tr>
          <tr>
            <td>None Type:</td>
            <td style={{ color: "red" }}>NoneType</td>
          </tr>
        </table>
        <div
          style={{
            borderBottom: "1px solid white",
            margin: "20px",
            marginLeft: "0px",
          }}
        ></div>
        <h3>Getting the Data Type</h3>
        <p>
          You can get the data type of any object by using the{" "}
          <span style={{ color: "red" }}>type()</span> function:
        </p>
        <div className="codepart">
          <h4 style={{ color: "black" }}>Example:</h4>
          <div className="codePartInside">
            <code>
              x = 5 <br />
              print(type(x))
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
        <h2>Setting the Data Type</h2>
        <p>
          In Python, the data type is set when you assign a value to a variable:
        </p>

        <table>
          <tr>
            <td>Example</td>
            <td> Data Type</td>
          </tr>
          <tr>
            <td>x = "Hello World"</td>
            <td>str</td>
          </tr>
          <tr>
            <td>x = 20</td>
            <td> int</td>
          </tr>
          <tr>
            <td>x = 20.5</td>
            <td>float</td>
          </tr>
          <tr>
            <td>x = 1j</td>
            <td>complex</td>
          </tr>
          <tr>
            <td>x = ["apple", "banana", "cherry"]</td>
            <td> list</td>
          </tr>
          <tr>
            <td>x = ("apple", "banana", "cherry")</td>
            <td> tuple</td>
          </tr>
          <tr>
            <td>x = range(6)</td>
            <td>range</td>
          </tr>
          <tr>
            <td>{'x = {"name" : "John", "age" : 36}'}</td>
            <td>dict</td>
          </tr>
          <tr>
            <td>{'x = {"apple", "banana", "cherry"}'}</td>
            <td>set</td>
          </tr>
          <tr>
            <td>{'x = frozenset({"apple", "banana", "cherry"})'}</td>
            <td>frozenset</td>
          </tr>
          <tr>
            <td>x = True</td>
            <td>bool</td>
          </tr>
          <tr>
            <td>x = b"Hello"</td>
            <td> bytes</td>
          </tr>
          <tr>
            <td>x = bytearray(5)</td>
            <td>bytearray</td>
          </tr>
          <tr>
            <td>x = memoryview(bytes(5))</td>
            <td>memoryview</td>
          </tr>
          <tr>
            <td>x = None</td>
            <td> NoneType</td>
          </tr>
        </table>

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

export default DataTypes;
