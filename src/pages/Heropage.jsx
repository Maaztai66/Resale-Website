import React from "react";
import image from "../assets/ladyimage.png";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import {Fade} from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ This is required!

const Heropage = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (

    <div>
     <Fade direction="down" delay={200} triggerOnce={true}>
      <section className="m-6 bg-gradient-to-t   from-emerald-300 to-emerald-100  rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-10 w-full">
          {/* Left Side Text Content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1
              data-aos="fade-right"
              className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              Discover Trendy Resale Fashion
            </h1>
            <p data-aos="fade-right" className="text-lg text-gray-700 max-w-xl">
              Buy and sell pre-loved clothes with ease. Sustainable fashion
              starts here — fresh styles, lower prices.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="bg-emerald-600 text-white rounded-lg px-5 py-3 font-semibold hover:bg-emerald-700 transition transform hover:scale-105 flex items-center gap-2 shadow-md">
                Shop Now <ArrowRight className="h-4 w-4" />
              </button>
              <button className="bg-white text-emerald-700 border border-emerald-600 rounded-lg px-5 py-3 font-semibold hover:bg-emerald-50 transition transform hover:scale-105 shadow">
                Sell Your Items
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={image}
              alt="Fashion"
              className="h-auto w-full max-w-md rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>
      </Fade>
    </div>
  );
};

export default Heropage;
