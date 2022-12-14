import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import logo from "./logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}

      <div className="flex items-center ">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:-text-4xl px-2">
          Pizzeria <span className="font-bold text-[#F23827]">Remolo</span>
        </h1>
      </div>


      {/*  Logo  */}

      <div className="hidden md:flex w-[100px] h-[80px] mt-0">
        <img className="h-[100px] mt-0 " src={logo} alt="logo" />
      </div>

      {/* Cart button */}

      <a href="https://wa.me/0303456" target="blank_" className="">
        <div className="flex items-center bg-black rounded-full p-1 text-[10px] md:text-[14px]  hover:cursor-pointer ml-11">
          <p className="bg-[#25d366] text-black rounded-full font-bold p-2">
            Delivery
          </p>
          <p className="p-2 text-white font-bold">Pick-up</p>
        </div>
      </a>

      {/* Mobile Menu */}
      {/*  Overlay */}

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Pizzeria <span className="font-bold text-[#F23827]">Remolo</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-black">
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="text-xl py-4 flex hover:cursor-pointer">
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
