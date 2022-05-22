import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
