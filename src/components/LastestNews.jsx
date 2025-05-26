import React, { useState } from "react";
import AnimatedButton2 from "./AnimatedButton2";
import news1 from "/images/news/tj-blog-8.webp";
import news2 from "/images/news/tj-blog-1.webp";
import news3 from "/images/news/tj-blog-2.webp";
import news4 from "/images/news/tj-blog-3.webp";

import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

function LastestNews() {
  const [isHovered, setIsHovered] = useState(false);
  const blogs = [
    {
      img: news4,
      title: "What consultants should know about working with nonprofits",
      date: "Apr 16, 2025",
      comments: "2 Comments",
      category: "Branding",
    },
    {
      img: news2,
      title: "Mastering change management key lessons for businesses",
      date: "Apr 16, 2025",
      comments: "2 Comments",
      category: "Branding",
    },
    {
      img: news3,
      title: "Why every entrepreneur needs solid digital marketing",
      date: "Apr 16, 2025",
      comments: "2 Comments",
      category: "Branding",
    },
  ];

  return (
    <section className="md:px-20 px-4 md:pt-20 pt-10 h-full">
      <div className="top flex md:justify-between flex-col md:flex-row font-LibreFranklinMedium md:items-center gap-6">
        <div className="left">
          <h2 className="font-lato text-secondary flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-2 h-2 bg-secondary rounded-full text-white"></span>
            <span className="font-semibold text-normal tracking-widest uppercase">
              Latest news
            </span>
            <span className="inline-flex items-center justify-center w-2 h-2 bg-secondary rounded-full text-white text-sm"></span>
          </h2>
          <h2 className="text-2xl md:text-6xl font-semibold leading-snug mb-4 font-LibreFranklinMedium text-black">
            Tip and tricks for success
          </h2>
        </div>
        <div className="right">
          <AnimatedButton2 text="Explore More" width="110" />
        </div>
      </div>

      <div className="font-lato flex flex-col md:flex-row gap-8 mt-8">
        {/* Left Blog */}
        <div className="md:w-1/2 w-full p-2 bg-blue-50">
          <div className="w-full group overflow-hidden">
            <img
              src={news1}
              alt=""
              className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="pt-4 flex flex-wrap items-center gap-2 px-4 text-[1rem] text-gray-600">
            <span className="border border-gray-300 rounded-xl px-2 py-0.5 hover:bg-secondary hover:text-white transition-all duration-500 ease-in-out">
              Branding
            </span>
            <span>Apr 16, 2025</span>
            <span className="inline-flex items-center justify-center w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>2 Comments</span>
          </div>
          <div className="flex flex-col pt-2 gap-4 px-4 font-LibreFranklinMedium">
            <a
              href="#"
              className="text-800 hover:text-secondary transition-all duration-300 ease-in-out font-semibold text-2xl md:text-4xl font-LibreFranklinMedium"
            >
              Innovative solutions for business success dynamic from today
            </a>
            <p className="text-gray-600 text-lg">
              Our mission is to empowers businesses size to thrive in an
              businesses ever changing marketplace. We are committed...
            </p>
            <a
              href="#"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="tracking-tighter flex items-center gap-1 font-librefranklin relative text-gray-800 cursor-pointer"
            >
              <span className="relative flex gap-1 tracking-normal">
                Read More <IoIosArrowRoundForward className="text-2xl" />
                {isHovered && (
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      repeat: 0,
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-700 origin-left"
                  />
                )}
              </span>
            </a>
          </div>
        </div>

        {/* Right Blog List */}
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          {blogs.map((blog, index) => (
            <div
              className="flex flex-col md:flex-row bg-blue-50 gap-4 p-4"
              key={index}
            >
              <div className="md:w-1/2 w-full group overflow-hidden">
                <img
                  src={blog.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="flex flex-col gap-4 pt-2">
                <span className="border text-gray-500 w-[80px] border-gray-300 rounded-xl px-2 py-0.5 hover:bg-secondary hover:text-white transition-all duration-500 ease-in-out">
                  {blog.category}
                </span>
                <a
                  href="#"
                  className="text-800 hover:text-secondary transition-all duration-300 ease-in-out font-semibold text-xl md:text-2xl font-LibreFranklinMedium"
                >
                  {blog.title}
                </a>
                <div className="pb-2 flex items-center gap-2 text-[1rem] text-gray-600">
                  <span>{blog.date}</span>
                  <span className="inline-flex items-center justify-center w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{blog.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LastestNews;
