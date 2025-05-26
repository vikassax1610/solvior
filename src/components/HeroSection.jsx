import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";
import hero from "/images/hero/hero.webp";
import dots from "/images/hero/dots.png";
import animation1 from "/images/hero/animation1.png";
import star from "/images/hero/star.png";
import PlayBackground from "/images/hero/about-mark-2.svg";
import playText from "/images/hero/play-text.png";
import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMdPlay } from "react-icons/io";
import VideoModal from "./VideoModal";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="bg-primary overflow-hidden text-white px-4 sm:px-12 md:px-20 lg:px-28 py-12 flex flex-col lg:flex-row items-center lg:items-start justify-between relative">
        {/* Floating animation image */}
        <motion.img
          src={animation1}
          alt=""
          className="absolute opacity-40 top-8 left-[10rem] lg:top-[8.5rem] lg:left-[-4rem]"
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Left Text Section */}
        <div className="pt-16 w-full lg:w-1/2 flex flex-col items-start gap-6  lg:text-left">
          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-LibreFranklinMedium font-semibold leading-tight tracking-wide flex flex-col">
            <span>Maximise growth</span>
            <span>qualified business</span>
            <span className="text-secondary">consulting</span>
          </h1>
          <p className="font-lato text-tertiary text-lg sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-8 tracking-wide max-w-xl">
            Transform your business with expert consultancy services our team of
            seasoned consultants unparalleled.
          </p>
          <div className="mt-4">
            <AnimatedButton text="Free Consultation" width="150" />
          </div>
        </div>

        {/* Star Animation */}
        <motion.img
          src={star}
          alt=""
          className="hidden lg:block absolute top-[35rem] left-[40rem]"
          initial={{ scale: 1 }}
          animate={{ scale: 1.5 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Scroll Button - hide on mobile */}
        <button className="hidden lg:flex absolute top-[38rem] font-LibreFranklinMedium font-medium text-lg items-center border gap-0.5 px-6 py-1 rounded-2xl left-[-0.1rem] rotate-[-90deg]">
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
          <span className="tracking-tighter text-sm font-semibold">SCROLL</span>
        </button>

        {/* Right Image + Dots */}
        <div className="relative mt-12 lg:mt-0">
          <motion.img
            src={dots}
            alt=""
            className="absolute top-[-2rem] right-[-2rem] lg:right-[-4rem] z-0 opacity-50"
            initial={{ x: 0 }}
            animate={{ x: 100 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <img src={hero} alt="" className="relative z-0 w-full  lg:mx-0" />

          {/* Play button with animation */}
          <div className="absolute z-50 bg-transparent left-18 transform -translate-x-1/2 top-[50%] size-36">
            <img
              src={PlayBackground}
              alt=""
              className="absolute z-0 top-0 size-36 rotate-[-90deg]"
            />
            <motion.img
              src={playText}
              alt=""
              className="absolute z-1 top-5 left-8"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 6,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <button onClick={() => setIsVideoOpen(true)}>
              <IoMdPlay className="absolute z-2 top-11 left-14 text-5xl bg-secondary rounded-full p-4" />
            </button>
            <VideoModal
              isOpen={isVideoOpen}
              onClose={() => setIsVideoOpen(false)}
              videoUrl="https://youtu.be/MLpWrANjFbI?si=I9ejEc1m76sX-V3b"
            />
          </div>
        </div>

        {/* Bottom Ellipse Section */}
        <section
          className="bg-white left-0 z-20 bottom-[-1rem] lg:bottom-[-1.1rem] md:py-20 w-full absolute  min-h-[90px] lg:h-[10px]"
          style={{
            clipPath: "ellipse(75% 100% at 50% 100%)",
          }}
        ></section>
      </div>
    </>
  );
}
