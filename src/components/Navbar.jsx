import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md w-full">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center h-16 px-4">
        <h1 className="text-xl font-bold">Dashboard</h1>

        <button
          className="lg:hidden block text-white focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <ul
          className={`lg:flex lg:space-x-6 lg:items-center absolute lg:static bg-blue-600 w-full lg:w-auto left-0 lg:left-auto px-4 py-4 lg:p-0 transition-transform duration-300 ${
            isOpen ? "top-16" : "-top-full"
          }`}
        >
          <li>
            <a href="#home" className="block py-2 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block py-2 hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="block py-2 hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
