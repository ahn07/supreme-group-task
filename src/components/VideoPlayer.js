"use client";

import { motion, AnimatePresence } from 'framer-motion';

export default function VideoPlayer({ videoSrc }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={videoSrc}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-[45vh] mb-4"
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </motion.div>
    </AnimatePresence>
  );
}