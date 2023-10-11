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
    <nav className="bg-gray-800 p-4 sticky top-0 z-20">
      {/* navbar for large screen */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* navbar logo */}
          <div className="w-28 md:w-full">
            <img src="./imgs/logo.svg" alt="logo" />
          </div>
          {/* navbar links for navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-[#e15223] font-bold text-md text">
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
          {/* Register btn of large screen */}
          <div className="hidden relative ml-3 md:flex items-center text-white">
            <button className="absolute top-2 md:top-1 lg:mt-2 xl:mt-3 left-7 md:left-5 lg:left-8 xl:left-12 font-bold text-md lg:text-xl">
              Register
            </button>
            <img
              src="/imgs/RegisterBtnSVG.svg"
              alt=""
              className="w-52 md:w-96"
            />
          </div>
          {/* Responsive menu button for smaller screens */}
          <div className="md:hidden relative flex items-center gap-2 flex-row-reverse">
            {/* Button for mobile */}
            <button className="absolute top-1 left-14 font-bold text-white text-md">
              Register
            </button>
            <img src="/imgs/RegisterBtnSVG.svg" alt="" className="w-28" />
            <button className="text-white" onClick={toggleMenu}>
              {isMenuOpen ? (
                // Close icon
                <span>
                  <AiOutlineClose size={30} />
                </span>
              ) : (
                // Hamburger icon
                <span>
                  <RxHamburgerMenu size={30} />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* navbar links for smaller screens */}
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
