import React from 'react';
import commercifylogo from '../../assets/images/Colorlogo.png';

export default function Navbar() {
  return (
    <header className="w-full bg-[#fdf7ed] py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 gap-4">
        
        {/* Logo */}
        <div
          className="w-48 h-12 bg-center bg-contain bg-no-repeat"
          // style={{ backgroundImage: `url(${commercifylogo})` }}
        ></div>

        {/* Button */}
        <div className="text-center">
          <button className="relative group border border-black rounded-full px-5 py-2 overflow-hidden transition">
            <span className="relative z-10 text-black text-sm font-bold transition-colors duration-100 group-hover:text-blue-700">
              GO TO HOMEPAGE
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
