import React, { useState, useEffect } from 'react';

function Food() {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/empanadas')
      .then(res => res.json())
      .then(data => {
        setFoods(data);
        setFilteredFoods(data); // Inicialmente muestra todas
      })
      .catch(err => console.error("Error cargando empanadas de la API:", err));
  }, []);

  // Función para filtrar por categoría (gourmet / clasicas)
  const filterCategory = (category) => {
    if (category === 'todas') {
      setFilteredFoods(foods);
    } else {
      setFilteredFoods(foods.filter((item) => item.category === category));
    }
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-8">Nuestro Menú</h1>
      
      {/* Botones de Filtro */}
      <div className="flex flex-col lg:flex-row justify-between mb-8">
        <div>
          <p className="font-bold text-gray-700 mb-2">Filtrar Categoría</p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => filterCategory('todas')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 rounded-xl border">Todas</button>
            <button onClick={() => filterCategory('clasicas')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 rounded-xl border">Clásicas</button>
            <button onClick={() => filterCategory('gourmet')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 rounded-xl border">Gourmet</button>
          </div>
        </div>
      </div>

      {/* Grilla de Empanadas */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {filteredFoods.map((item) => (
          <div key={item.id} className="border shadow-lg rounded-lg hover:scale-105 duration-300 overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover" />
            <div className="flex justify-between px-2 py-4 bg-white">
              <p className="font-bold">{item.name}</p>
              <p><span className="bg-orange-500 text-white p-1 rounded-full text-xs font-bold">{item.price}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;