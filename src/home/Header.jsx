import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../assets/header-logo.png";
import DropDownProfile from "./components/drowndownprofile";

function Header({ sendDatatoHome }) {
  const [showDropDown, setDropDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!showDropDown);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSendData = () => {
    sendDatatoHome(showDropDown);
  };

  return (
    <div
      className="bg-gradient-to-r from-purple-900 from-20% via-fuchsia-600 via-40% to-amber-500 to-95% w-full p-2"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 5%)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <img
              src={headerLogo}
              alt="slack-logo"
              className="h-8 w-8 sm:h-12 sm:w-12"
            />

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="ml-4 p-2 rounded-lg hover:bg-purple-800 lg:hidden"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link className="text-base text-white hover:text-amber-200 transition-colors">
              Search
            </Link>
            <Link className="text-base text-white hover:text-amber-200 transition-colors">
              What is WatchDogs?
            </Link>
          </div>

          {/* Profile Button */}
          <div className="flex items-center z-[1000]">
            <div
              className="relative inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer hover:ring-2 hover:ring-amber-300 transition-all"
              onClick={() => {
                toggleDropDown();
                handleSendData();
              }}
            >
              <span className="font-medium text-gray-600 dark:text-gray-300">
                JL
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden mt-4 pb-2 space-y-3`}
        >
          <Link className="block text-base text-white hover:text-amber-200 transition-colors py-2">
            Search
          </Link>
          <Link className="block text-base text-white hover:text-amber-200 transition-colors py-2">
            What is WatchDogs?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
