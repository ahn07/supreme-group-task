import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-white text-black flex justify-between items-center px-4 py-2 md:px-8 md:py-4 fixed top-0 w-full z-50">
      <div className="flex items-center">
        <img src="/supreme-logo.svg" alt="Supreme Group Logo" className="h-8 md:h-10" />
        
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/contact">
          <button 
            className="bg-[#5CD6FF] text-black px-4 py-2 rounded-full hover:bg-blue-500 transition"
            aria-label="Contact Us"
          >
            Contact Us
          </button>
        </Link>
        <div className="flex space-x-2">
          <button className="text-gray-600 hover:text-black" aria-label="LinkedIn">
            <img src="/linkedin.svg" alt="LinkedIn" className="h-5" />
          </button>
          <button className="text-gray-600 hover:text-black" aria-label="Language Switch to English">
            <img src="/en.svg" alt="LinkedIn" className="h-5" />           
          </button>
        </div>
      </div>
    </nav>
  );
}