import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHeader from "./components/NavbarHeader";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CarouselComponent from "./components/CarouselComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavbarHeader />
      <CarouselComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
