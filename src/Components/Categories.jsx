// import React from "react";
// import clothes from "../assets/clothes.png";
// import electronics from "../assets/electronics.png";
// import accessories from "../assets/accessories.png";
// import womenswear from "../assets/womenswear.png";

// const Categories = () => {
//   const categories = [
//     { id: 1, name: "Men's Clothing", image: clothes },
//     { id: 2, name: "Women's Clothing", image: electronics },
//     { id: 3, name: "Electronics", image: accessories },
//     { id: 4, name: "Accessories", image: womenswear },
//   ];

//   return (
//     <section className="bg-[#fefce8] py-12 m-6 rounded-2xl">
//       <h2 className="text-3xl font-bold text-center mb-8">
//         Browse by Categories
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 ">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center hover:scale-110 hover:border-orange-500 transition duration-300 delay-150 border-l-7 border-b-7 border-[#fefce8]"
//           >
//             <img
//               src={category.image}
//               alt={category.name}
//               className="h-50 w-auto shadow-2xl rounded-2xl mb-4"
//             />
//             <h3 className="text-lg font-semibold">{category.name}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Categories;
import React from "react";
import clothes from "../assets/clothes.png";
import electronics from "../assets/electronics.png";
import accessories from "../assets/accessories.png";
import womenswear from "../assets/womenswear.png";

const Categories = () => {
  const categories = [
    { id: 1, name: "Men's Clothing", image: clothes },
    { id: 2, name: "Women's Clothing", image: womenswear },
    { id: 3, name: "Electronics", image: electronics },
    { id: 4, name: "Accessories", image: accessories },
  ];

  return (
    <section className="mx-6 my-12 bg-gradient-to-b from-teal-600 to-stone-100 rounded-3xl py-12 px-4 shadow-md">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-8 font-poppins">
        Browse by Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-rose-500 border-2 border-transparent cursor-pointer"
            aria-label={`View ${category.name} category`}
            role="button"
            tabIndex={0}
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-40 w-full object-cover rounded-lg mb-4 shadow-sm"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-gray-900 font-open-sans">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;