import React from "react";
import HeadLineCards from "./components/HeadLineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Food from "./components/Food.jsx";
import AboutUS from "./components/AboutUS.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <AboutUS />
    </div>
  );
}

export default App;
