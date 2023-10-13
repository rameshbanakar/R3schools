import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="homepage mainHome">
        <h1> Let's Learn to Code</h1>
      </div>
      {/*  */}
      <div className="mainHomeHtml">
        <div className="htmlInside">
          <div className="leftBox">
            <h1>
              <b>HTML</b>
            </h1>
            <br />
            <h3>The language for building web pages</h3>
            <br />
            <Link to="/html/simplePrint/">
              <button type="button" className="btn btn-outline-primary">
                Learn HTML
              </button>
            </Link>
          </div>
          <div className="rigthBox">
            <h3>HTML Example:</h3>
            <div className="codeInMain">
              <code></code>
            </div>
          </div>
        </div>
      </div>
      {/* end of one box */}
      <div className="mainHomeCss">
        <div className="htmlInside">
          <div className="leftBox">
            <h1>
              <b>CSS</b>
            </h1>
            <br />
            <h3>The language for styling web pages</h3>
            <br />
            <Link to="/css/simplePrint/">
              <button type="button" className="btn btn-outline-primary">
                Learn CSS
              </button>
            </Link>
          </div>
          <div className="rigthBox">
            <h3>CSS Example:</h3>
            <div className="codeInMain">
              <code></code>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div
        className="mainHomeHtml"
        style={{ backgroundColor: "rgb(255, 128, 128)" }}
      >
        <div className="htmlInside">
          <div className="leftBox">
            <h1>
              <b>JAVASCRIPT</b>
            </h1>
            <br />
            <h3>The language for programming web pages</h3>
            <br />
            <Link to="/html/simplePrint/">
              <button type="button" className="btn btn-outline-primary">
                Learn JAVASCRIPT
              </button>
            </Link>
          </div>
          <div className="rigthBox">
            <h3>JAVASCRIPT Example:</h3>
            <div className="codeInMain">
              <code>console.log("hello world")</code>
            </div>
          </div>
        </div>
      </div>
      {/* end of one box */}
      <div
        className="mainHomeHtml"
        style={{ backgroundColor: "rgb(153, 255, 153)" }}
      >
        <div className="htmlInside">
          <div className="leftBox">
            <h1>
              <b>PYTHON</b>
            </h1>
            <br />
            <h3>A popular programming language</h3>
            <br />
            <Link to="/pyhton/Simpleprint">
              <button type="button" className="btn btn-outline-primary">
                Learn PYTHON
              </button>
            </Link>
          </div>
          <div className="rigthBox">
            <h3>Python Example:</h3>
            <div className="codeInMain">
              <code>print("Hello world")</code>
            </div>
          </div>
        </div>
      </div>
      {/* end of one box */}
      {/* end of one box */}
      <div
        className="mainHomeHtml"
        style={{ backgroundColor: "rgb(102, 204, 255)" }}
      >
        <div className="htmlInside">
          <div className="leftBox">
            <h1>
              <b>C++</b>
            </h1>
            <br />
            <h3>A popular programming language</h3>
            <br />
            <Link to="/c++/simplePrint">
              <button type="button" className="btn btn-outline-primary">
                Learn C++
              </button>
            </Link>
          </div>
          <div className="rigthBox">
            <h3>C++ Example:</h3>
            <div className="codeInMain">
              <code></code>
            </div>
          </div>
        </div>
      </div>
      {/* end of one box */}
      {/* end of one box */}
      <div
        className="mainHomeHtml"
        style={{ backgroundColor: "rgb(255, 255, 204)" }}
      >
        <div className="htmlInside">
          <div className="leftBox">
            <h1>
              <b>REACT</b>
            </h1>
            <br />
            <h3>A popular javascript UI library</h3>
            <br />
            <Link to="/react/simpleprint">
              <button type="button" className="btn btn-outline-primary">
                Learn React
              </button>
            </Link>
          </div>
          <div className="rigthBox">
            <h3>React Example:</h3>
            <div className="codeInMain">
              <code>
                
              </code>
            </div>
          </div>
        </div>
      </div>
      {/* end of one box */}
    </>
  );
}

export default Home;
