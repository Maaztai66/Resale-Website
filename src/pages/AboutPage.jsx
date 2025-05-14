import React, { useEffect } from "react";
import aboutimage12 from "../assets/aboutimage.png";
import Aos from "aos";

const AboutPage = () => {
   useEffect(() => {
      Aos.init({
        offset: 200,
        duration: 1000,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);
  return (
    <div className="mx-6 my-12 bg-gradient-to-b from-red-900 to-white shadow-md rounded-3xl p-6 ">
      <h1 className="flex justify-center rounded-xl p-5 m-10 bg-teal-600 text-4xl md:text-5xl font-extrabold text-white font-poppins">
        ABOUT US
      </h1>
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-8 mt-4">
        <div className="sm:w-1/2">
          <p data-aos="fade-right" className="text-base sm:text-lg text-gray-700 max-w-3xl mt-4 p-4 rounded-2xl bg-white shadow-md font-open-sans">
            Welcome to ReTeasure, your trusted destination for high-quality resale
            fashion and accessories! We believe that style shouldn’t come at the
            cost of sustainability. <br /><br />
            Our mission is to give pre-loved clothing and accessories a second
            life, helping you find affordable, stylish pieces while reducing
            waste. Whether it's vintage treasures or trendy fashion, we curate a
            collection that lets you shop smart. <br /><br />
            Join us in building a more conscious shopping experience—where every
            purchase contributes to a sustainable future. Explore our collection
            today!
          </p>
        </div>
        <img
        data-aos="fade-left"
          src={aboutimage12}
          alt="About Us"
          className="sm:w-1/2 w-full h-auto rounded-2xl shadow-lg hovershadow-xl transition-transform duration-300 transform hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutPage;