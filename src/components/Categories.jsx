import React from "react";
import { categories } from "../data/data";

const Categories = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-[#F23827] font-bold text-4xl text-center mb-8">
        Top Rated Topics
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 border shadow-lg rounded-xl p-4 flex justify-between items-center hover:scale-105 duration-300 hover:cursor-pointer"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20 " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
