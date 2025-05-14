import React from "react";
import { useEffect } from "react";
import AOS from "aos";

const reviews = [
  {
    name: "Ayesha Khan",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Absolutely love the quality and prices. It’s my go-to site for resale fashion!",
  },
  {
    name: "Rahul Sharma",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Fast delivery, stylish options, and great customer support. Highly recommended!",
  },
  {
    name: "Meera Patel",
    image:
      "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "I was skeptical at first, but now I’m a fan. The clothes were like new!",
  },
];

const CustomerReviews = () => {
   useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 1000,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16 m-6 bg-gradient-to-t from-teal-500 to-gray-100 rounded-2xl shadow-lg">
    <div className="">
      <h2 data-aos="fade-right"  className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Our Customers Say
      </h2>
      <div data-aos="fade-right" className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition hover:scale-105 duration-300"
          >
            <img
              src={r.image}
              alt={r.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-green-300"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              {r.name}
            </h3>
            <p className="text-gray-600">{r.review}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CustomerReviews;
