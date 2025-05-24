import React from "react";
import signinlady from "../assets/signinlady.png";
import logo from "../assets/download.png";

const Signpage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left side - Image and Logo */}
      <div className="flex flex-col justify-center items-center bg-amber-100 w-full md:w-1/2 relative p-6 order-2 md:order-1">
        {/* Logo */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-lg font-semibold text-gray-800">Resale Place</span>
        </div>
        {/* Image */}
        <img
          src={signinlady}
          alt="Sign In"
          className="max-h-[300px] md:max-h-[500px] object-contain rounded-4xl shadow-2xl shadow-black"
        />
      </div>

      {/* Right side - Sign Up Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-6 md:p-10 order-1 md:order-2">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 text-center md:text-left">
          Create Your Account
        </h1>
        <form className="flex flex-col gap-4 w-full max-w-sm">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
          />
          <button className="bg-teal-500 text-white rounded-lg p-3 font-medium hover:bg-teal-600 transition-transform duration-200 hover:scale-105">
            Sign Up
          </button>
          <p className="text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-teal-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signpage;
