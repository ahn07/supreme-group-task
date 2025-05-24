"use client"

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[50vh] md:h-[100vh] text-center px-4 pt-16 md:pt-20 bg-[#00000099]">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-400 text-sm md:text-base mb-2"
      >
        Performance in motion
      </motion.p>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold max-w-3xl"
      >
        Soft Trims and <span className='text-blue-300'>NVH Solutions</span>  for seamless rides
      </motion.h1>
    </section>
  );
}