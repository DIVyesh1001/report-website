import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 bg-white border-t">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img
            src="src\assets\images\Colorlogo.png" // Replace with your logo path
            alt="Intelligence Node"
            className="h-10 w-auto"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-gray-700 text-xl">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-700 text-white px-8 py-4 flex flex-col md:flex-row justify-between items-center text-sm gap-2">
        <div className="flex items-center gap-4">
          <p>© 2025 Intelligence Node</p>
          <p className="hidden sm:inline">marketing@intelligencenode.com</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
