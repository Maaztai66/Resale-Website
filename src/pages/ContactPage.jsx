import React from "react";
import contactlady from "../assets/contactlady.png";

const ContactPage = () => {
  return (
    <div className="mx-6 my-12 bg-gradient-to-b from-teal-600 to-stone-100 rounded-3xl p-8 ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Image side */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <img
            src={contactlady}
            alt="Contact"
            className="w-4/5 md:w-full rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Form side */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mt-4 md:mt-10 font-poppins">
            Contact Us
          </h1>
          <form className="flex flex-col items-center w-full px-4 md:px-0 mt-10">
            <input
              type="text"
              placeholder="Name"
              className="mb-4 p-3 border border-gray-200 rounded-lg w-full md:w-1/2 outline-none focus:ring-2 focus:ring-teal-600 focus:border-white shadow-md font-open-sans"
              aria-label="Name"
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-4 p-3 border border-gray-200 rounded-lg w-full md:w-1/2 outline-none focus:ring-2 focus:ring-teal-600 focus:border-white shadow-md font-open-sans"
              aria-label="Email"
            />
            <textarea
              placeholder="Message"
              className="mb-4 p-3 border border-gray-200 rounded-lg w-full md:w-1/2 h-32 outline-none focus:ring-2 focus:ring-teal-6j00 focus:border-white shadow-md font-open-sans"
              aria-label="Message"
            />
            <button
              type="submit"
              className="bg-rose-500 text-white rounded-lg px-6 py-3 hover:bg-rose-600 hover:border-2 hover:border-red-500 transition-transform transform hover:scale-105 shadow-md font-poppins"
              aria-label="Send message"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;