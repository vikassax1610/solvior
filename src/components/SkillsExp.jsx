import React from "react";
import ScrollProgressBar from "./ScrollProgressBar";
import { useInView } from "react-intersection-observer";

function SkillsExp() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-[url(/images/skills/experience-bg.webp)] font-lato bg-cover bg-center bg-no-repeat md:h-auto md:min-h-screen flex items-center justify-center md:justify-end px-4 sm:px-6 py-10">
      <div className="w-full md:w-[40%] shadow-2xl flex flex-col gap-4 bg-transparent backdrop-blur-xl md:mr-20 border border-gray-500 rounded-lg p-4 sm:p-6 md:p-8">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-LibreFranklinMedium font-bold">
          Skill and Experience
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          In today's dynamic business environment, the key to success lies in
          strategic planning and operational.
        </p>
        <div className="flex flex-col text-white gap-4">
          <div className="flex flex-col gap-2 sm:gap-4" ref={ref}>
            <p className="font-semibold text-base sm:text-lg tracking-tight">
              Business consultants
            </p>
            <ScrollProgressBar inView={inView} ref={ref} end={90} />
          </div>
          <div className="flex flex-col gap-2 sm:gap-4">
            <p className="font-semibold text-base sm:text-lg tracking-tight">
              Client communication
            </p>
            <ScrollProgressBar inView={inView} ref={ref} end={85} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsExp;
