import React from "react";
import { motion } from "framer-motion";
// import OurCompany from "./OurCompany";

const Explore = () => {
  const exploreData = [
    { title: "Quick solutions", image: "/images/Explore/quick.svg" },
    { title: "Expert advice", image: "/images/Explore/expert.svg" },
    { title: "Strategic planning", image: "/images/Explore/strategic.svg" },
    { title: "Efficient operations", image: "/images/Explore/efficient.svg" },
  ];

  return (
    <div className="container mx-auto pt-8 px-4 md:px-20 md:py-16 flex flex-col items-center">
      {/* Title and Description */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-lato text-secondary font-semibold text-lg flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-secondary rounded-full"></span>
          Number #1 Solver
          <span className="w-2 h-2 bg-secondary rounded-full text-sm"></span>
        </h2>

        <h2 className="font-LibreFranklinMedium text-3xl md:text-5xl font-bold mt-4">
          Explore our core features
        </h2>
        <p className="mt-4 text-gray-700 text-md md:text-lg max-w-xl mx-auto">
          Our mission is to empower businesses to thrive in solutions
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {exploreData.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden border border-tertiary bg-white px-4 py-16 rounded-lg shadow-md"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* Background hover effect */}
            <motion.div
              variants={{
                rest: { x: "-100%" },
                hover: { x: "0%" },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#E1E8F0] z-0"
            />

            {/* Foreground Content */}
            <div className="relative z-10">
              <img
                src={item.image}
                alt={item.title}
                className="h-20 mb-8 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2 text-black">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                Our consultancy excels in providing quick solutions tailored to
                your business challenges.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* OurCompany Section Below */}
      
    </div>
  );
};

export default Explore;
