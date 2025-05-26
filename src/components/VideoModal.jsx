import React from "react";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoModal({ isOpen, onClose, videoUrl }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-md bg-transparent flex items-center justify-center">
          {/* Optional translucent white overlay (remove if not needed) */}
          <div className="absolute inset-0 bg-white/10 z-0"></div>

          {/* Close Button */}
          <RxCross1
            className="absolute top-6 right-6 text-black text-3xl cursor-pointer hover:rotate-90 transition-transform duration-300 z-10"
            onClick={onClose}
          />

          {/* YouTube Video */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-4xl aspect-video z-10"
          >
            <iframe
              className="w-full h-full rounded-lg shadow-xl"
              src={`${videoUrl}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
