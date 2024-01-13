import React from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar.js";
import Footer from "./Components/Layout/Footer.js";
import About from "./Components/Pages/About.js";
import Achievements from "./Components/Pages/Achievements.js";
import NotFound from "./Components/Pages/NotFound.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/achievements" element={<Achievements />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
