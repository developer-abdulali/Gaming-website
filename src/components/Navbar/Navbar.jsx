import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-gray-800 p-4">
      {/* Responsive menu button for smaller screens */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <img src="./imgs/logo.png" alt="logo" />
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white font-bold text-md text">
              Marketplace
            </Link>
            <Link to="/" className="text-white">
              Stats
            </Link>
            <Link to="/" className="text-white">
              Collections
            </Link>
            <Link to="/" className="text-white">
              Explore
            </Link>
            <Link to="/" className="text-white">
              Community
            </Link>
          </div>
          <div className="hidden md:block text-white">
            <button>Register</button>
          </div>
          {/* Responsive menu button for smaller screens */}
          <div className="md:hidden flex items-center gap-2 flex-row-reverse">
            {/* Button for mobile */}

            <button className="text-white ">Register</button>
            <button className="text-white" onClick={toggleMenu}>
              {isMenuOpen ? (
                // Close icon
                <span>
                  <AiOutlineClose size={20} />
                </span>
              ) : (
                // Hamburger icon
                <span>
                  <RxHamburgerMenu size={20} />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Responsive menu for smaller screens */}
      {isMenuOpen && (
        <div className="md:hidden  p-4">
          <Link to="/" className="text-white font-bold text-md text">
            Marketplace
          </Link>
          <Link to="/" className="text-white block py-3">
            Stats
          </Link>
          <Link to="/" className="text-white block py-3">
            Collections
          </Link>
          <Link to="/" className="text-white block py-3">
            Explore
          </Link>
          <Link to="/" className="text-white block py-3">
            Community
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
