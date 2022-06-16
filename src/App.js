import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FoodMenu from "./pages/FoodMenu";
import DrinkMenu from "./pages/DrinkMenu";
import Reserve from "./pages/Reserve";
import Togo from "./pages/Togo";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-menu" element={<FoodMenu />} />
        <Route path="/drink-menu" element={<DrinkMenu />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/togo" element={<Togo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
