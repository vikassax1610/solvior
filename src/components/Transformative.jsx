import React from "react";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";
import ShineImage from "./ShineImage";

const Transformative = () => {
  const ServiceIcon = [
    {
      title: "Strategic planning execution",
      icon: "/images/Explore/quick.svg",
      image: "/images/Transformative/h1-service-1.webp",
    },
    {
      title: "Leadership executive coaching",
      icon: "/images/Explore/expert.svg",
      image: "/images/Transformative/h1-service-2.webp",
    },
    {
      title: "Empowered leadership journey",
      icon: "/images/Explore/strategic.svg",
      image: "/images/Transformative/h1-service-3.webp",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 pt-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-4   md:mx-16 p-4 md:p-8">
          <div className="text-left">
            <h2 className="font-lato text-secondary font-semibold text-sm md:text-lg flex items-center gap-2 justify-start tracking-wider">
              <span className="w-2 h-2 bg-secondary rounded-full inline-block"></span>
              TRANSFORMATIVE SOLUTIONS
              <span className="w-2 h-2 bg-secondary rounded-full inline-block"></span>
            </h2>
            <h2 className="text-2xl md:text-6xl font-semibold leading-snug md:mb-4 font-LibreFranklinMedium text-black">
              Get our exclusive services
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2">
            <span className="bg-secondary text-white text-sm md:text-md rounded-lg px-2 font-bold">
              ★ ★ ★ ★ ★
            </span>
            <p className="text-tertiary text-sm md:text-md font-semibold">
              Customers review (<span className="text-black">4.8</span>/5.0)
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col px-2 md:px-16 gap-8">
          {ServiceIcon.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center bg-primary p-4 md:p-0"
            >
              {/* Left */}
              <div className="w-full md:w-1/2 flex flex-col mt-8 md:mt-32 md:ml-16 gap-6 md:gap-8">
                <motion.img
                  src={item.icon}
                  alt={item.title}
                  className="bg-secondary size-12 md:size-16"
                  whileHover={{
                    x: [0, -5, 5, -5, 5, 0],
                    transition: { duration: 1 },
                  }}
                />
                <h2 className="text-white text-2xl md:text-4xl font-bold font-LibreFranklinMedium transition-transform hover:scale-x-110 origin-left duration-300 ease-in-out">
                  {item.title}
                </h2>
                <p className="text-tertiary text-sm md:text-md max-w-md">
                  In today's dynamic business environment, the key to success
                  lies in strategic planning and operational execution.
                </p>
                <div className="mb-6 md:mb-16">
                  <AnimatedButton text="Get Started" width={120} />
                </div>
              </div>

              {/* Right */}
              <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end">
                <ShineImage src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Transformative;
