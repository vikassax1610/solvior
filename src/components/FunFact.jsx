import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function StatItem({ end, suffix, title, isLast }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className="flex flex-col items-start px-12 py-10 bg-white relative"
    >
      <h3 className="text-7xl font-bold text-gray-900">
        {inView ? (
          <CountUp start={0} end={end} duration={2.5} suffix={suffix} />
        ) : (
          "0"
        )}
      </h3>
      <p className="tracking-wide text-gray-600 text-lg">{title}</p>

      {/* Dot on right border */}
      {!isLast && (
        <span
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full z-10 
          hidden lg:inline-block" // Hide dot on small screens
        ></span>
      )}
    </div>
  );
}

function FunFact() {
  const stats = [
    { end: 95, suffix: "%", title: "Complete project" },
    { end: 20, suffix: "M", title: "Reach worldwide" },
    { end: 8.5, suffix: "x", title: "Faster growth" },
    { end: 100, suffix: "+", title: "Awards archived" },
  ];

  return (
    <section className="bg-blue-50 md:py-16 w-full font-lato">
      <div className="text-center pt-8 md:pt-40 md:mb-12">
        <h2 className="text-secondary flex items-center text-lg justify-center gap-2 uppercase tracking-wide">
          <span className="inline-flex items-center justify-center w-1 h-1 bg-secondary rounded-full text-white"></span>{" "}
          Fun Facts
          <span className="inline-flex items-center justify-center w-1 h-1 bg-secondary rounded-full text-white"></span>
        </h2>
        <h1 className="pb-8 pt-4 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-wide">
          Exploring fun tidbits and <br /> fascinating facts
        </h1>
      </div>

      {/* Desktop layout (unchanged) */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 bg-white font-LibreFranklinMedium">
        {stats.map((item, index) => (
          <StatItem
            key={index}
            end={item.end}
            suffix={item.suffix}
            title={item.title}
            isLast={index === stats.length - 1}
          />
        ))}
      </div>

      {/* Mobile layout (new stacked version) */}
      <div className="block lg:hidden max-w-xl pb-4 mx-auto px-4  font-LibreFranklinMedium">
  <div className="grid grid-cols-2 divide-x divide-gray-300 relative">
    {stats.map((item, index) => (
      <div key={index} className="flex flex-col bg-white items-center justify-center py-8 px-4 relative">
        <h3 className="text-4xl font-bold text-gray-900">
          <CountUp start={0} end={item.end} duration={2.5} suffix={item.suffix} />
        </h3>
        <p className="tracking-wide text-gray-600 text-sm text-center mt-2">
          {item.title}
        </p>

        {/* Blue dot on the right (between left & right column) */}
        {(index === 0 || index === 2) && (
          <span className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 bg-blue-500 rounded-full z-10"></span>
        )}
      </div>
    ))}
  </div>
</div>

    </section>
  );
}

export default FunFact;
