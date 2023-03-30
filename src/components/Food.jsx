import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  //   Filters Type burgers/pizza

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //  Filter by price

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-[#F23827] font-bold text-5xl text-center mb-10">
        Menu
      </h1>
      {/* Filted Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter by Categorie</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-[#F23827] border-[1px] text-[#F23827] hover:bg-[#F23827] hover:text-white"
            >
              All
            </button>

            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-[#F23827] border-[1px] text-[#F23827] hover:bg-[#F23827] hover:text-white"
            >
              Pizzas
            </button>
            <button
              onClick={() => filterType("special")}
              className="m-1 border-[#F23827] border-[1px] text-[#F23827] hover:bg-[#F23827] hover:text-white"
            >
              Specials
            </button>
            <button
              onClick={() => filterType("desserts")}
              className="m-1 border-[#F23827] border-[1px] text-[#F23827] hover:bg-[#F23827] hover:text-white"
            >
              Desserts
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter by Price</p>
          <div className="flex justify-between max-w-[390px] w-full ">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-[#F23827] border-[1px] text-[#F23827] hover:bg-[#F23827] hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-[#F23827] border-[1px] text-[#F23827] hover:bg-[#F23827] hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-[#F23827] border-[1px] text-[#F23827] hover:bg-[#F23827] hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-[#F23827] border-[1px] text-[#F23827] hover:bg-[#F23827] hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Foods */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300 hover:cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold ">{item.name}</p>
              <p>
                <span className="bg-[#F23827] text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
