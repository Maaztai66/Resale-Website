import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    
    <footer className="bg-gradient-to-t from-red-900 to-red-700 text-white px-6 py-10 rounded-t-3xl mt-10  mb-0 m-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div className="ml-10">
          <h2 data-aos="fade-right" className="text-2xl font-bold mr-6 mb-2">
            Resale Place
          </h2>
          <p data-aos="fade-right" className="text-gray-300">
            Sustainable fashion starts here. Buy & sell pre-loved items with
            ease!
          </p>
        </div>

        {/* Contact Info */}
        <div className="ml-20">
          <h3 data-aos="fade-right" className="text-xl font-semibold  mb-3">
            Contact Us
          </h3>
          <ul data-aos="fade-right" className="space-y-2 text-gray-200 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />{" "}
              <a href="tel:1123454544">123-245-4666</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />{" "}
              <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                diam lectus.
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="ml-10">
          <h3 data-aos="fade-right" className="text-xl font-semibold mb-3">
            Follow Us
          </h3>
          <div data-aos="fade-right" className="flex gap-4 text-gray-300">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="hover:text-white transition" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="hover:text-white transition" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-red-800 pt-4">
        © {new Date().getFullYear()} Resale Place. All rights reserved.
      </div>
      <div>
        <p className="text-center text-gray-400 text-sm mt-2">
          Designed by Maaz
        </p>
      </div>
      <div className="  flex justify-center items-center ">
        <div className="  rounded-3xl bg-amber-100 w-100 text-center space-x-4 p-2 m-3">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-black font-medium cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="categories"
            smooth={true}
            duration={500}
            className="text-black font-medium cursor-pointer"
          >
            Categories
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-black font-medium cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="text-black font-medium cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
