import React from "react";
import img1 from "/images/ourProject/h5-project-1.webp";
import img2 from "/images/ourProject/h5-project-2.webp";
import img3 from "/images/ourProject/h5-project-3.webp";
import img4 from "/images/ourProject/h5-project-4.webp";
import img6 from "/images/ourProject/h5-project-6.webp";
import img5 from "/images/ourProject/h5-project-5.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
function OurProjects() {
  const projects = [
    {
      img: img1,
      title: "Prime strategy partners",
      text1: "Strategy",
      text2: "Marketing",
    },
    {
      img: img2,
      title: "Business strategies",
      text1: "Strategy",
      text2: "Business",
    },
    {
      img: img3,
      title: "Innovative solutions",
      text1: "Marketing",
      text2: "Growth",
    },
    {
      img: img4,
      title: "Empower enterprise",
      text1: "Marketing",
      text2: "Business",
    },
    {
      img: img5,
      title: "Strat edge solutions",
      text1: "Growth",
      text2: "Business",
    },
    {
      img: img6,
      title: "Innovate consultancy",
      text1: "Strategy",
      text2: "Marketing",
    },
  ];

  return (
    <section className="bg-blue-50 py-16 w-full mt-28 font-lato">
      <div className="text-center md:pt-20 mb-12">
        <h2 className="text-secondary flex items-center text-lg justify-center gap-2 uppercase tracking-wide">
          <span className="inline-flex items-center justify-center w-1 h-1 bg-secondary rounded-full text-white"></span>{" "}
          Our projects
          <span className="inline-flex items-center justify-center w-1 h-1 bg-secondary rounded-full text-white"></span>
        </h2>
        <h1 className="pb-8 pt-4 md:text-5xl text-4xl font-semibold tracking-wide">
          Breakthrough projects
        </h1>
      </div>
      <div className="md:px-12 px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 1000,
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
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4, // Desktop remains 4 slides
            },
          }}
          className="h-[500px] flex gap-4 w-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="h-full relative group" key={index}>
                <div className="h-full w-full overflow-hidden">
                  <img
                    src={project.img}
                    alt=""
                    className="h-full group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                {/* <div className=" absolute inset-0 w-full bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/60 to-transparent" /> */}
                <div className="bg-primary/50 h-full  absolute inset-0" />
                <div className="absolute  w-full bottom-0 px-4 py-8 flex items-start flex-col gap-4  bg-gradient-to-t from-primary via-primary/90   to-transparent  text-white">
                  <h1 className=" text-2xl font-bold">{project.title}</h1>
                  <div className=" w-full flex gap-3 text-gray-200">
                    <span className="px-4 py-1  bg-gray-800/60  text-sm rounded-xl">
                      {project.text1}
                    </span>
                    <span className="px-4 py-1 bg-gray-800/60  text-sm rounded-xl">
                      {project.text2}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default OurProjects;
