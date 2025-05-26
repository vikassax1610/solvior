import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";

function ScrollProgressBar({ inView, ref, end }) {
  const [percent, setPercent] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${end}%` });

      // Simulate percentage count-up with interval
      let start = 0;
      const duration = 800; // ms
      const steps = 45;
      const interval = duration / steps;
      const step = end / steps;

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setPercent(end);
          clearInterval(timer);
        } else {
          setPercent(Math.floor(start));
        }
      }, interval);
    }
  }, [inView, controls, end]);

  return (
    <div className="flex flex-col gap-2" ref={ref}>
      <div className="w-[75%] h-2 bg-blue-200 rounded-full relative overflow-visible">
        {/* Progress fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-blue-600 rounded-full"
        />

        {/* Moving box with percentage */}
        {inView && (
          <motion.div
            initial={{ left: "0%" }}
            animate={{ left: `${end}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-[-36px] -translate-x-1/2 px-2 py-1 bg-blue-600 text-white text-sm font-semibold rounded shadow"
          >
            {percent}%
          </motion.div>
        )}
        {inView && (
          <motion.div
            initial={{ left: "0%" }}
            animate={{ left: `${end}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-6 border-blue-600"
          />
        )}
      </div>
    </div>
  );
}

export default ScrollProgressBar;
