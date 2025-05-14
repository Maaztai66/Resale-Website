import React, { useEffect, useState } from "react";
import useItemsStore from "../store/itemstore";
import AOS from "aos";


const Sellpage = () => {
  const [items, setItems] = useState([]);
  const { fetchItems, items: storeItems, error, loading } = useItemsStore();
   useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 1000,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    if (storeItems) {
      setItems(storeItems);
    }
  }, [storeItems]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-teal-600 to-stone-100">
        <div className="flex items-center gap-2 text-xl text-white font-poppins">
          <svg
            className="animate-spin h-5 w-5 text-rose-500"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-teal-600 to-stone-100">
        <div className="text-center text-xl text-rose-500 font-poppins">
          Failed to load items. Please try again later.
          <button
            onClick={fetchItems}
            className="mt-4 bg-rose-500 text-white rounded-lg px-4 py-2 hover:bg-rose-600 transition-transform transform hover:scale-105 font-poppins"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div   className="mx-6 my-12 bg-gradient-to-b from-teal-600 to-stone-100 rounded-3xl shadow-md p-6 ">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white my-10 font-poppins">
        Sell Items
      </h1>
      <div data-aos="fade-right"  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 p-4 rounded-lg shadow-md bg-white transition-all hover:shadow-lg hover:bg-stone-50"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h2 className="text-xl font-semibold text-gray-900 font-poppins">
                {item.name}
              </h2>
              <p className="text-gray-600 font-open-sans">Price: ${item.price}</p>
            </div>
          ))
        ) : (
          <div data-aos="fade-right"  className="text-xl text-gray-700 font-open-sans col-span-full text-center">
            No items available at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default Sellpage;