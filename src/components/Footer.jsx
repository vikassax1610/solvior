import React from "react";
import { motion } from "motion/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoSend,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const brand = [
    "/images/Footer/brand-thumb-1.png",
    "/images/Footer/brand-thumb-2.png",
    "/images/Footer/brand-thumb-3.png",
    "/images/Footer/brand-thumb-4.png",
    "/images/Footer/brand-thumb-5.png",
    "/images/Footer/brand-thumb-6.png",
  ];

  const resources = [
    "Contact us",
    "Privacy policy",
    "Recognitions",
    "Careers",
    "Team",
    "Blog",
  ];

  const services = [
    "Business process",
    "Empowered leadership",
    "Executive growth",
    "Leadership executive",
    "Legacy leadership",
    "Strategic planning",
  ];

  const socialIcons = [
    { icon: <IoLogoFacebook />, color: "hover:text-secondary" },
    { icon: <IoLogoInstagram />, color: "hover:text-secondary" },
    { icon: <FaXTwitter />, color: "hover:text-secondary" },
    { icon: <IoLogoLinkedin />, color: "hover:text-secondary" },
  ];

  return (
    <div className="relative pt-28">
      {/* Concave Curve */}
      <svg
        className="absolute bottom-172 left-0 w-full"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#051229"
          d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
        />
      </svg>
      <footer className="bg-[#051229] text-white mt-8">
        <div className="w-full flex justify-center overflow-hidden">
          <div className="w-[70%] overflow-hidden">
            <motion.div
              className="flex gap-8 p-16 mx-8 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...brand, ...brand].map((item, index) => (
                <div key={index} className="bg-[#1D293E] p-4 flex-shrink-0">
                  <img
                    src={item}
                    alt={`logo-${index}`}
                    className="h-8 w-auto"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="top flex md:justify-around md:flex-row flex-col border-t border-gray-500">
          {/* Our offices */}
          <div className="left flex flex-col md:flex-row md:justify-between gap-12 p-8 m-4">
            <div className="p-2 m-2">
              <h3 className="text-xl font-semibold mb-12">Our offices</h3>
              <div className="mb-6 text-tertiary">
                <p className="text-sm text-gray-400">Headquarters - USA</p>
                <p className="mt-1">
                  993 Renner Burg, West Rond, <br /> MT 94251-030
                </p>
                <p className="mt-1 text-blue-300 font-semibold">
                  +1 (009) 544-7818
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Operations - Canada</p>
                <p className="mt-1">
                  Suite 452 8082 Boner Parge, <br />
                  Elviraton, CA 48998
                </p>
              </div>
            </div>

            {/* Resources */}
            <div className="p-2 md:ml-16">
              <h3 className="text-xl font-semibold mb-12">Resources</h3>
              <ul className="space-y-2 text-tertiary mb-4 text-md">
                {resources.map((item, index) => (
                  <li
                    key={index}
                    className="mb-4 text-xl hover:scale-x-110 origin-left transition-transform duration-300 ease-in-out hover:text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="p-2">
              <h3 className="text-xl font-semibold mb-12">Services</h3>
              <ul className="space-y-2 text-tertiary text-md">
                {services.map((item, index) => (
                  <li
                    key={index}
                    className="mb-4 text-l hover:scale-x-110 origin-left transition-transform duration-300 ease-in-out hover:text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[1px] bg-gray-500 mr-2"></div>

          <div className="right mt-15 flex flex-col">
            <div className="top flex flex-col justify-start">
              <h3 className="text-3xl hidden md:block font-semibold mb-8 font-LibreFranklinMedium">
                Subscribe to our <br /> newsletter
              </h3>
              <h3 className="text2xl md:hidden block font-semibold px-4 mb-4 font-LibreFranklinMedium">
                Subscribe to our newsletter
              </h3>
              <div className="md:w-[400px] flex mb-4 md:mx-0 mx-4 items-center justify-between bg-[#1e2c45] px-4 py-4">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-[95%] flex-1 bg-transparent outline-none text-lg text-white placeholder-gray-400"
                />
                <IoSend className="text-blue-400 text-4xl cursor-pointer w-[10%] hover:rotate-[-45deg]" />
              </div>
            </div>

            <div className="bottom relative w-[100px]">
              <button className="absolute left-[17rem] md:left-72 ml-4 top-12 md:top-20 font-LibreFranklinMedium font-medium border-tertial flex text-lg items-center border px-6 py-1 rounded-4xl rotate-[90deg]">
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: -10 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "anticipate",
                  }}
                >
                  <IoIosArrowRoundBack className="text-3xl" />
                </motion.span>
                <span className="tracking-tighter text-sm w-[50px] font-semibold">
                  GO TOP
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="bottom">
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 px-2 py-6 flex flex-col md:flex-row justify-around items-center bg-[#16233c]">
            <p className="text-sm text-tertiary">
              © 2025 <span className="font-bold text-white">Solvior</span> All
              right reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {socialIcons.map((social, index) => (
                <span
                  key={index}
                  className={`text-2xl cursor-pointer ${social.color}`}
                >
                  {social.icon}
                </span>
              ))}
            </div>
            <div className="text-sm text-tertiary mt-4 md:mt-0">
              <span className="hover:underline cursor-pointer">
                Policy & privacy
              </span>{" "}
              •{" "}
              <span className="hover:underline cursor-pointer">
                Terms & conditions
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
