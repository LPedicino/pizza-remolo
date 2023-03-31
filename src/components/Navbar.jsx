import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { BiRestaurant } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1980px] mx-auto flex justify-between items-center p-4 px-3 bg-gradient-to-r from-black via-black to-white">
      {/* Left side */}

      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer hover:text-black hover:bg-white text-white rounded-lg active:scale-90 p-1">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:-text-6xl px-2">
          <span className="font-extrabold text-green-700">Pizz</span><span className="font-extrabold text-white">eria</span> <span className="font-extrabold text-red-700">Remolo</span>
        </h1>
      </div>


  

      {/* Cart button */}

      <a href="https://wa.me/0303456" target="blank_" className="">
        <div className="flex items-center bg-black rounded-full p-1 text-[10px] md:text-[14px] active:scale-95  hover:cursor-pointer ml-11 hover:scale-105 duration-200">
          <p className="bg-[#25d366] text-black rounded-full font-bold p-2">
            Delivery
          </p>
          <p className="p-2 text-white font-bold">Pick-up</p>
        </div>
      </a>

      {/* Mobile Menu */}
      {/*  Overlay */}

      {nav ? (
        <div className="bg-black/50 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-black z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-black z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer hover:bg-white text-white hover:text-black rounded-full active:scale-90 p-1"
        />
        <h2 className="text-2xl p-4">
          <span className="font-extrabold text-green-700">Pizz</span><span className="font-extrabold text-white">eria</span> <span className="font-extrabold text-red-700">Remolo</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-black">
            <li className="text-xl py-4 flex hover:cursor-pointer hover:bg-white hover:text-black text-white rounded-lg">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer hover:bg-white hover:text-black text-white rounded-lg">
              <BiRestaurant size={25} className="mr-4" />
              Menu
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer hover:bg-white hover:text-black text-white rounded-lg">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer hover:bg-white hover:text-black text-white rounded-lg">
              
              <AiFillTag size={25} className="mr-4" />
              Promos
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer hover:bg-white hover:text-black text-white rounded-lg">
            <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer hover:bg-white hover:text-black text-white rounded-lg">
              <BsFillSaveFill size={25} className="mr-4" />
              About Us
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer hover:bg-white hover:text-black text-white rounded-lg">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
