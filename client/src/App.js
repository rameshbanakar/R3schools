
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import NavSec from './components/NavSec';
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <div className="NavbarFix">
        <NavBar />
        <NavSec />
      </div>

      <div className="appMain ">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
