import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const AboutUS = () => {
  return (
    <div name="about" className="w-full h-[100%] lg:h-screen">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto  flex flex-col justify-center h-full items-center text-center gap-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-black mt-[5rem]">
          Pizz<span className="font-extrabold text-green-700">eria</span> <span className="font-extrabold text-red-700">Remolo</span>
        </h1>
        <h2 className="text-lg sm:text-2xl my-6 text-red-700 text-center items-center ml-[4%] md:ml-0">
        In 1896, a family of Italian immigrants arrived in Argentina and brought with them their passion for cooking and their renowned Neapolitan pizza recipe. Over time, their family business grew and thrived, becoming a beloved institution in the local community. Today, we continue this tradition by honoring their legacy and serving up authentic Neapolitan pizza made with love and care.</h2>
        <div>
          <img
            className="rounded-xl lg:w-[650px] md:w-[550px] w-[360px] mt-7 ml-0 md:ml-0"
            src="https://images.unsplash.com/photo-1581886020291-33855d6eaf3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div className="hidden md:block w-[1100px] h-[60px] mt-[5rem]  rounded-full">
          <div className="flex flex-col px-10 py-2 items-center text-center">
            <ul className="flex flex-row justify-around w-full h-[50px] ">
            <p className="pt-3">&copy; 2023 Pizza Remolo Restaurant. All rights reserved</p>
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
            
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
