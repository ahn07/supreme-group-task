"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VerticalTabs from './VerticalTabs';
import ContentArea from './ContentArea';

const sections = [
  {
    title: 'Passenger vehicles',
    description: 'Revving up NONwoven innovation from interior to exterior.',
    videos: [
      { name: 'Complete Body', src: '/passenger-car.mp4', thumb: '/body.svg' },
      { name: 'Front', src: '/truck.mp4', thumb: '/front-pic.svg' },
      { name: 'Cabin', src: '/front.mp4', thumb: '/front-pic.svg' },
      { name: 'Trunk', src: '/cabin.mp4', thumb: '/truck-pic.svg' },
      { name: 'Exterior', src: '/exterior.mp4', thumb: '/exterior-pic.svg' },
    ],
  },
  {
    title: 'Commercial vehicles',
    description: 'Advancing NONwoven engineering for heavy-duty vehicles.',
    videos: [
      
      { name: 'Front', src: '/truck.mp4', thumb: '/front-pic.svg' },
      { name: 'Cabin', src: '/front.mp4', thumb: '/front-pic.svg' },
      { name: 'Trunk', src: '/cabin.mp4', thumb: '/truck-pic.svg' },
      
    ],
  },
];

export default function TabbedSection() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section className="flex flex-col md:flex-row justify-center items-center  py-4 px-4 md:px-8 bg-black text-white">
      <VerticalTabs 
        sections={sections} 
        activeSection={activeSection} 
        setActiveSection={(index) => {
          setActiveSection(index);
          setActiveVideo(0);
        }} 
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <ContentArea 
            section={sections[activeSection]} 
            activeVideo={activeVideo} 
            setActiveVideo={setActiveVideo} 
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}