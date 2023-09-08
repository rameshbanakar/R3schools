
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import NavSec from './components/NavSec';
import Home from "./components/Home";

import SimplePrint from './components/python/SimplePrint';
import LogIn from './components/Login';
import SignIn from './components/SignIn';
import PythonComment from './components/python/PythonComment';

function App() {
  return (
    <BrowserRouter>
      <div className="NavbarFix">
        <NavBar />
        <NavSec />
      </div>
      {/* <div className="secNavbar"></div> */}

      <div className="appMain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Python/Simpleprint" element={<SimplePrint />} />
          <Route path="/Python/Comment" element={<PythonComment />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
