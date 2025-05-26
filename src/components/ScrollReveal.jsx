import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Fade + slide-up when the element enters the viewport.
 *
 * Props:
 *  ─ delay   → stager multiple components
 *  ─ y       → how far to slide (px)
 *  ─ once    → true (default) plays only the first time it enters view
 */
export default function ScrollReveal({
  children,
  delay = 0,
  y = 40,
  once = true,
  ...rest
}) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.15 });

  const variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
