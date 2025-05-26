import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { BiSolidQuoteRight } from "react-icons/bi";
import mask from "/images/testimonial/about-mark-1.svg";
import tasti1 from "/images/testimonial/h1-test-1.webp";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import tasti2 from "/images/testimonial/h1-test-2.webp";
import tasti3 from "/images/testimonial/h3-test-5.png";

function Testimonials() {
  const testimonials = [
    { id: 1, name: "Jack William", position: "Sr. Manager", image: tasti1 },
    { id: 2, name: "John Doe", position: "Business Owner", image: tasti2 },
    { id: 3, name: "Esther Howard", position: "Sr. Executive", image: tasti3 },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 pt-10 md:pt-16 h-full">
      <div className="top flex flex-col md:flex-row justify-between font-LibreFranklinMedium items-start md:items-center gap-6 md:gap-0">
        <div className="left">
          <h2 className="font-lato text-secondary flex items-center gap-2 text-sm sm:text-base">
            <span className="inline-flex items-center justify-center w-2 h-2 bg-secondary rounded-full text-white"></span>
            <span className="font-semibold tracking-widest uppercase">
              Testimonials
            </span>
            <span className="inline-flex items-center justify-center w-2 h-2 bg-secondary rounded-full text-white text-sm"></span>
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug mb-2 font-LibreFranklinMedium text-black">
            Listening to our clients
          </h2>
        </div>
        <div className="right flex gap-4 md:ml-0">
          <button>
            <IoArrowBackSharp className="border hover:bg-secondary transition-all duration-300 hover:text-white size-12 sm:size-14 border-gray-400 rounded-full p-3 sm:p-4" />
          </button>
          <button>
            <IoArrowBackSharp className="rotate-180 border hover:bg-secondary transition-all duration-300 hover:text-white border-gray-400 size-12 sm:size-14 rounded-full p-3 sm:p-4" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="mt-10 px-2 sm:px-4"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-blue-50 h-full">
              <div className="flex flex-row items-start justify-between gap-6 p-6 sm:p-8">
                <div className="pt-1">
                  <BiSolidQuoteRight className="size-12 sm:size-20 text-secondary" />
                </div>
                <p className="text-base sm:text-lg border-b border-gray-300 pb-6 font-LibreFranklinMedium text-gray-700">
                  Our experience with Solvior has been nothing short of
                  exceptional. From day one, their team demonstrated a deep
                  understanding of our industry and quickly identified key areas
                  for improvement. Their recommendations were not only
                  innovative but also practical, leading to a substantial
                  operational efficiency.
                </p>
              </div>
              <div className="flex md:flex-row items-center  gap-6   pt-0">
                <div className="relative flex items-center justify-center">
                  <img
                    src={mask}
                    alt=""
                    className="size-32 sm:size-36 invert "
                  />
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-full size-28 sm:size-24 absolute left-4 sm:left-8"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <div className="flex justify-center sm:justify-start px-2 bg-white rounded-2xl items-center gap-1">
                    <MdOutlineStarPurple500 className="text-secondary size-5" />
                    <MdOutlineStarPurple500 className="text-secondary size-5" />
                    <MdOutlineStarPurple500 className="text-secondary size-5" />
                    <MdOutlineStarPurple500 className="text-secondary size-5" />
                    <MdOutlineStarOutline className="text-secondary size-5" />
                  </div>
                  <div className="font-lato">
                    <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
                      {item.name}
                    </h1>
                    <p className="text-base text-gray-600">{item.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination mt-6 flex justify-center"></div>

      {/* Custom dot styles */}
      <style>
        {`
          .swiper-pagination {
            margin-top: 2rem;
            position: relative;
            bottom: -20px;
            display: flex;
            justify-content: center;
            gap: 0.5rem;
          }

          .swiper-pagination-bullet {
            background: #2563eb;
            opacity: 1;
            width: 12px;
            height: 12px;
            margin: 0 6px;
            border-radius: 50%;
          }

          .swiper-pagination-bullet-active {
            border: 2px solid #2563eb;
            background: white;
          }
        `}
      </style>
    </div>
  );
}

export default Testimonials;
