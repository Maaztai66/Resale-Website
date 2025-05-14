import React from "react";
import logo from "../assets/download.png";
import { Facebook, Twitter, Github } from "lucide-react";
import loginpagelady from "../assets/loginpagelady.png";

const Loginpage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-center items-start px-24 w-1/2 md:bg-amber-100 sm:bg-amber-100">
        {/* Header */}
        <div className="flex items-center mb-8">
          <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
          <h1 className="text-xl font-bold"></h1>
        </div>

        {/* Login Heading */}
        <h1 className="text-5xl font-bold mb-4">Login To Your Account</h1>
        <p className="text-lg text-gray-600 mb-4">
          Login Using Social Networks
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mb-8">
          <button className="flex items-center gap-2 border p-2 rounded-full hover:bg-gray-100 hover:scale-110 transition">
            <Facebook className="w-6 h-6 text-blue-600" />
          </button>
          <button className="flex items-center gap-2 border p-2 rounded-full hover:bg-gray-100 hover:scale-110 transition">
            <Github className="w-6 h-6" />
          </button>
          <button className="flex items-center gap-2 border p-2 rounded-full hover:bg-gray-100 hover:scale-110 transition">
            <Twitter className="w-6 h-6 text-blue-400" />
          </button>
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-md w-80 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-md w-80 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          />
          <a
            href="/forgot-password"
            className="text-sm text-teal-500 hover:underline"
          >
            Forgot Password?
          </a>
          <button className="bg-teal-500 text-white font-semibold p-2 rounded-md w-80 hover:bg-teal-600 hover:scale-105 transition-transform duration-200">
            Login
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Don't have an account?{" "}
            <a href="/sign" className="text-teal-500 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>

      
      {/* Right Side - Lady Image */}
      <div className="hidden md:flex justify-center items-center w-1/2 p-10">
        <img
          src={loginpagelady}
          alt="Login Lady"
          className="rounded-xl max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Loginpage;
