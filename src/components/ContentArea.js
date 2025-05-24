"use client";

import VideoPlayer from './VideoPlayer';
import HorizontalTabs from './HorizontalTabs';

export default function ContentArea({ section, activeVideo, setActiveVideo }) {
  return (
    <div className="flex flex-col justify-center items-center md:p-10">
      <h1 className="text-2xl md:text-[55px]  font-normal mb-4 md:mb-8 text-center">
        Evolving the drive with <span className='font-bold'>360-degree</span>  nonwoven solutions
      </h1>
      <VideoPlayer videoSrc={section.videos[activeVideo].src} />
      <HorizontalTabs 
        videos={section.videos} 
        activeVideo={activeVideo} 
        setActiveVideo={setActiveVideo} 
      />
      <p className="text-gray-400 text-sm mt-4 text-center">
        Click anywhere for next slide (Only written for prototype)
      </p>
    </div>
  );
}