import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const AboutUS = () => {
  return (
    <div name="about" className="w-full h-[100%] lg:h-screen">
      {/* Container */}

      <div className="max-w-[1980px] mx-auto flex flex-col justify-center h-full items-center text-center gap-4">
        <h1 className="text-3xl sm:text-6xl font-bold text-black mt-[5rem]">
          <span className="font-extrabold text-green-700">Pizz</span><span className="font-extrabold text-gray-400/50">eria</span> <span className="font-extrabold text-red-700">Remolo</span>
        </h1>
        <h2 className="w-[480px] sm:w-[720px] lg:w-[1680px] font-style: italic text-lg sm:text-xl my-6 text-red-700 text-center items-center ml-[4%] md:ml-0 px-10">
        In 1896, a family of Italian immigrants arrived in Argentina and brought with them their passion for cooking and their renowned Neapolitan pizza recipe. Over time, their family business grew and thrived, becoming a beloved institution in the local community. Today, we continue this tradition by honoring their legacy and serving up authentic Neapolitan pizza made with love and care.</h2>
        <div className="max-w-[1980px] items-center m-auto">
          <img
            className="rounded-xl hidden lg:flex lg:w-[720px] h-[520px] m-auto"
            src="https://images.unsplash.com/photo-1607207504006-89723ee11236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div className="hidden md:block w-full h-[55px] mt-[2rem] bg-gradient-to-r from-green-400 via-white to-red-500 ">
          <div className="flex flex-col px-4 pt-1 items-center text-center">
            <ul className="flex flex-row justify-around w-full h-[50px] ">
           
              <li className="w-[25px] h-[25px] rounded-full flex flex-row items-center hover:scale-110 duration-300 mt-2">
                {" "}
                <a
                  className="flex items-center text-[#8a3ab9]"
                  href="https://www.instagram.com/"
                  target="blank_"
                >
                  <FaInstagram size={25} />
                </a>
              </li>
              <li className="w-[25px] h-[25px] rounded-full flex flex-row items-center hover:scale-110 duration-300 mt-2">
                {" "}
                <a
                  className="grid items-center w-full text-[#1DA1F2]"
                  href=" https://www.twitter.com"
                  target="blank_"
                >
                  <FaTwitter size={25} />
                </a>
              </li>
              <li className="w-[25px] h-[25px] rounded-full flex flex-row items-center  hover:scale-110 duration-300 mt-2">
                {" "}
                <a
                  className="grid items-center w-full text-black"
                  href="https://www.facebook.com/"
                  target="blank_"
                >
                  <FaFacebookSquare className="text-[#3b5998]" size={25} />
                </a>
              </li>
              <p className="pt-3">&copy; 2023 Pizza Remolo Restaurant. All rights reserved</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
