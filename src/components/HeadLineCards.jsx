import React from "react";

const HeadLineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Delivery all town</p>
          <p className="px-2">from 12:00 at 00:00</p>
          <button className="border-white bg-white font-bold text-black mx-2 absolute bottom-4 hover:bg-[#F23827] hover:text-white active:scale-95 duration-100 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://static.vecteezy.com/system/resources/previews/002/861/702/original/cute-pizza-delivery-man-hold-pizza-box-cartoon-illustration-kawaii-cartoon-character-vector.jpg"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Franchises available</p>
          <button className="border-white bg-white font-bold text-black mx-2 absolute bottom-4 hover:bg-[#F23827] hover:text-white active:scale-95 duration-100">
            Contact US
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/vectors/cartoon-pizzeria-vector-flat-illustration-vector-id519962818?k=20&m=519962818&s=612x612&w=0&h=WJdUTmWzzgQm6C-PUw6KxFfYq_qXVkYaiduqbIZLn6o="
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">We Have Desserts Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white font-bold text-black mx-2 absolute bottom-4 hover:bg-[#F23827] hover:text-white active:scale-95 duration-100">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadLineCards;
