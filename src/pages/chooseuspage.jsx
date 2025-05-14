import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { useEffect } from 'react'
import AOS from 'aos'

const ChooseUspage = () => {
   useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 1000,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);
      const sellRef = useRef(null);
      
    const scrollToSell = () => {
        sellRef.current.scrollIntoView({ behavior: "smooth" });
      };
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
    <h2 data-aos="fade-right" className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
    <p data-aos="fade-right" className="text-gray-600 text-center max-w-2xl mb-6">
      We are committed to providing a seamless shopping experience, offering a wide range of high-quality products at unbeatable prices. Our platform is designed to make buying and selling easy and enjoyable for everyone.
    </p>
    <button
    data-aos="fade-right"
      data-aos-delay="200"
      onClick={scrollToSell}
      className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
    >
      Start Selling <ArrowRight className="inline ml-2" />
    </button>
  </div>
  )
}

export default ChooseUspage