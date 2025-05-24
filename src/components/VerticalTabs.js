"use client";

export default function VerticalTabs({ sections, activeSection, setActiveSection }) {
  return (
    <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 mb-4 md:mb-0 md:mr-8">
      {sections.map((section, index) => (
        <button
          key={index}
          className={`text-left px-4 py-2 rounded md:border-l-4 transition-colors ${
            activeSection === index
              ? 'border-blue-400 text-white'
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
          onClick={() => setActiveSection(index)}
          aria-selected={activeSection === index}
          role="tab"
        >
          <h2 className="text-lg md:text-xl font-semibold">{section.title}</h2>
          <p className="text-sm md:text-base">{section.description}</p>
        </button>
      ))}
    </div>
  );
}