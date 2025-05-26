import { motion } from "framer-motion";

const ShineImage = ({ src, alt }) => {
  return (
    <motion.div
      className="relative overflow-hidden inline-block"
      whileHover="shine"
    >
      <img src={src} alt={alt} className="block" />

      <motion.div
        className="absolute top-0 left-[-150%] w-2/3 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
          transform: "skewX(-20deg)",
        }}
        variants={{
          shine: {
            left: ["-150%", "150%"],
            transition: {
              duration: 1.5,
              ease: "easeInOut",
            },
          },
        }}
      />
    </motion.div>
  );
};

export default ShineImage;
