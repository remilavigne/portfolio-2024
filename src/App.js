import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import PageNotFound from "./Pages/Home/PageNotFound.jsx";
import Home from "./Pages/Home/Homescreen";
import SprinterSell from "./Pages/Home/SprinterSell.jsx";
import CreeperCorners from "./Pages/Home/CreeperCorners.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/SprinterSell" element={<SprinterSell />} />
            <Route path="/CreeperCorners" element={<CreeperCorners />} />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
