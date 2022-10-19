import React from "react";
import HeadLineCards from "./components/HeadLineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Food from "./components/Food.jsx";
import Categories from "./components/Categories.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Categories />
    </div>
  );
}

export default App;
