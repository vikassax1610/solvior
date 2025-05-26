import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const AnimatedButton2 = ({ text, width }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-black rounded-full border px-1 py-0.5 border-gray-300 inline-block">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`rounded-full flex  items-center gap-2 py-0.5  transition-colors duration-300 ${
          hovered ? "bg-secondary" : "bg-black"
        }`}
      >
        {/* Arrow wrapper */}
        <div className="relative w-10 h-10 px-1 py-1 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={hovered ? "arrow-hover" : "arrow"}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-0 w-full h-full flex items-center justify-center rounded-full bg-secondary text-white"
            >
              <IoIosArrowRoundForward className="text-3xl" />
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Text with vertical slide animation */}
        <div
          className="relative h-6  overflow-hidden"
          style={{ width: `${width}px` }}
        >
          <AnimatePresence mode="wait">
            {hovered ? (
              <motion.span
                key="hover-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute left-0 top-0 text-[16px] font-semibold tracking-tight text-white"
              >
                {text}
              </motion.span>
            ) : (
              <motion.span
                key="default-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute  left-0 top-0 text-[16px] font-semibold tracking-tight text-white"
              >
                {text}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
};

export default AnimatedButton2;
