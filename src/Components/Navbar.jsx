import React, { useState } from "react";
import SearchBar from "./SearchBar";
import logo from "../assets/download.png"; // Import your logo image
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-teal-600 to-teal-300 shadow-md rounded-2xl m-6">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-xl text-white font-bold">Resale Place</h1>
        </div>

        <SearchBar />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-amber-400 transition-all duration-300"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-amber-400 transition-all duration-300"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-amber-400 transition-all duration-300"
          >
            Contact
          </ScrollLink>
          <ScrollLink
            to="sell"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-amber-400 transition-all duration-300"
          >
            Sell
          </ScrollLink>
          <ScrollLink
            to="categories"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-amber-400 transition-all duration-300"
          >
            Categories
          </ScrollLink>
        </div>

        {/* Sign In Button */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-white text-teal-600 rounded-3xl px-3 py-1 hover:bg-teal-600 hover:text-white transition-all duration-300">
            <Link to="/sign" className="font-medium cursor-pointer">
              Sign In
            </Link>
          </button>
          <button className="hidden md:block bg-white text-teal-600 rounded-3xl px-3 py-1 hover:bg-teal-600 hover:text-white transition-all duration-300">
            <Link to="/login" className="font-medium cursor-pointer">
              Login
            </Link>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-4 bg-teal-200 rounded-xl shadow-md">
          <ScrollLink
            to="home"
            className="cursor-pointer hover:text-amber-400 transition-all duration-300"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            className="cursor-pointer hover:text-amber-400 transition-all duration-300"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            className="cursor-pointer hover:text-amber-400 transition-all duration-300"
          >
            Contact
          </ScrollLink>
          <ScrollLink
            to="sell"
            className="cursor-pointer hover:text-amber-400 transition-all duration-300"
          >
            Sell
          </ScrollLink>
          <ScrollLink
            to="categories"
            className="cursor-pointer hover:text-amber-400 transition-all duration-300"
          >
            Categories
          </ScrollLink>
          <ScrollLink
            to="/sign"
            className="text-teal-600 hover:text-amber-800 font-semibold cursor-pointer"
          >
            Sign In
          </ScrollLink>
          <ScrollLink
            to="/login"
            className="text-teal-600 font-medium cursor-pointer"
          >
            Login
          </ScrollLink>
        </div>
      )}

      {/* Hero Section */}
      <div>
        <h1 className="lg:text-6xl text-3xl font-bold text-center text-white p-4">
          Buy and sell pre-owned items
        </h1>
        <h1 className="text-base text-center sm:text-lg md:text-xl font-extrabold text-white lg:text-2xl px-4 py-2 leading-relaxed break-words w-full max-w-xl m-auto">
          Find great deals on secondhand apparel, accessories, electronics, and
          more.
        </h1>
        <div className="flex justify-center items-center">
          <button className="bg-teal-600 text-white rounded-lg hover:scale-110 hover:bg-teal-700  hover:text-white px-4 py-2 border shadow-2xl shadow-black transition-all duration-300 m-4">
            <Link to="/home">Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
