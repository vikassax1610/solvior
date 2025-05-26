import React from "react";
import bigImg from "/images/OurCompany/Big.webp";
import smallImg from "/images/OurCompany/small.webp";
import client1 from "/images/OurCompany/thumb-1.png";
import client2 from "/images/OurCompany/thumb-2.png";
import client3 from "/images/OurCompany/thumb-3.png";
import AnimatedButton2 from "./AnimatedButton2";
import { BiCheckDouble } from "react-icons/bi";
import mask from "/images/testimonial/about-mark-1.svg";

const OurCompany = () => {
  return (
    <div className="md:mr-16 mt-8 md:mt-0">
      <div className="bg-[#E6EEF7] relative rounded-br-[80px] md:rounded-br-[150px] px-4 md:px-8 py-12 md:py-16 w-full ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 md:flex justify-start  hidden">
            <img
              src={bigImg}
              alt="big"
              className="w-[35%] left-0 absolute top-[6rem] rounded-lg"
            />
            <div className="absolute top-3 left-[29rem]">
              <img
                src={mask}
                alt=""
                className="w-1/4 top-0 rotate-90 invert "
              />
              <img
                src={smallImg}
                alt="small"
                className="z-20 absolute top-4 left-4  "
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="font-lato text-secondary font-semibold text-lg flex items-center gap-2 tracking-wider">
              <span className="inline-block w-2 h-2 bg-secondary rounded-full"></span>
              OUR COMPANY
              <span className="inline-block w-2 h-2 bg-secondary rounded-full text-sm">
                .
              </span>
            </h2>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4 font-LibreFranklinMedium text-black">
              Crafting success tailored <br />
              solution for each & every challenge
            </h2>

            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Our mission is to empower businesses of all sizes to thrive in an
              ever-changing marketplace. We are committed to delivering
              exceptional value through strategic insight and innovative
              approaches.
            </p>

            <hr className="border-t border-tertiary  w-full" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              {/* Bullet Points */}
              <div className="flex flex-col gap-2">
                <ul className="space-y-2">
                  {[
                    "Expertise and experience",
                    "Client centric approach",
                    "Commitment to excellence",
                  ].map((point, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-blue-500">
                        <BiCheckDouble className="text-xl" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <AnimatedButton2 text="Read More" width={120} />
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-56 bg-gray-400"></div>

              {/* Client Stats */}
              <div className="flex flex-col items-start md:items-center">
                <div className="flex -space-x-4 mb-2">
                  {[client1, client2, client3].map((client, i) => (
                    <img
                      key={i}
                      src={client}
                      alt={`client-${i}`}
                      className="w-10 h-10 rounded-full border-2 border-white grayscale"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold border-2 border-white">
                    +3
                  </div>
                </div>
                <div className="text-left sm:text-center">
                  <span className="text-3xl font-bold text-black">3K+</span>
                  <p className="text-gray-500 text-sm leading-tight">
                    Happy clients all over <br /> the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
