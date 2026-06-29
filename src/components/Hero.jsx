import React, { useState, useEffect } from 'react';

function Hero() {
  const [activeSlides, setActiveSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/slides')
      .then(res => res.json())
      .then(data => setActiveSlides(data))
      .catch(err => console.error("Error cargando slides de la API:", err));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === activeSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-play simple para el carrusel
  useEffect(() => {
    if (activeSlides.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [activeSlides]);

  if (activeSlides.length === 0) {
    return <div className="max-w-[1640px] h-[500px] mx-auto p-4 bg-gray-200 animate-pulse rounded-xl"></div>;
  }

  return (
    <div className="max-w-[1640px] h-[500px] w-full mx-auto p-4 relative group">
      <div
        style={{ backgroundImage: `url(${activeSlides[currentIndex]?.url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
      >
        {/* Capa oscura decorativa */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 rounded-2xl flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Las Mejores</h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500">Empanadas</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;