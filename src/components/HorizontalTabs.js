"use client";

export default function HorizontalTabs({ videos, activeVideo, setActiveVideo }) {
  return (
    <div className="flex justify-center space-x-4 overflow-x-auto">
      {videos.map((video, index) => (
        <button
          key={index}
          className={`flex flex-col items-center p-2 rounded transition-opacity ${
            activeVideo === index ? 'opacity-100' : 'opacity-50 hover:opacity-80'
          }`}
          onClick={() => setActiveVideo(index)}
          aria-selected={activeVideo === index}
          role="tab"
        >
          <img
            src={video.thumb}
            alt={video.name}
            className="w-16 h-16 md:w-24 md:h-24 object-cover rounded"
            loading="lazy"
          />
          <span className="text-sm mt-2">{video.name}</span>
        </button>
      ))}
    </div>
  );
}