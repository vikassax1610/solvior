import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MdWatchLater } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

export default function TopBanner() {
  const [hovering, setHovering] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovering(true);
    setAnimating(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div className="bg-secondary hidden  lg:flex justify-between items-center  h-10 font-lato px-3">
      <div className="h-full flex items-center gap-2">
        {/* Icon */}
        <IoShieldCheckmarkSharp className="text-white text-xl" />

        {/* Text */}
        <p className="text-white flex items-center gap-2 tracking-normal font-light">
          Trusted partner in business excellence{" "}
          <a
            href="#"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="tracking-tighter flex items-center font-librefranklin relative text-white cursor-pointer"
          >
            <span className="relative tracking-normal font-semibold ">
              Join us now
              {/* Static underline (visible when not animating) */}
              {!animating && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white" />
              )}
              {/* Animated underline on hover (plays twice) */}
              {hovering && animating && (
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1,
                    repeat: 1,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left"
                  onAnimationComplete={() => setAnimating(false)}
                />
              )}
            </span>
            <ChevronRight className="text-white pt-0.5" size={20} />
          </a>
        </p>
      </div>
      <div className="flex text-white items-center justify-end gap-2 font-lato">
        <div className="flex h-full items-center justify-center gap-1">
          <MdWatchLater className="text-white text-lg" />
          <p className="text-white flex items-center gap-1 tracking-normal font-light">
            Mon - Friday from 9:00 - 18:00
          </p>
        </div>
        <span className="">|</span>
        <div className="flex h-full items-center justify-center gap-1">
          <IoMdMail className="text-white text-lg" />
          <a
            href=""
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="tracking-tighter  flex items-center gap-1 font-librefranklin relative text-white cursor-pointer"
          >
            <span className="relative tracking-normal">
              support@solvior.com {/* Static underline */}
              {/* Animated underline */}
              {isHovered && (
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    repeat: 0,
                    repeatType: "loop",
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left"
                />
              )}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
