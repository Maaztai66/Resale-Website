import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="border border-white/20 outline-none bg-white/70 rounded-l-full px-4 py-2 w-full"
        />
        <button className="bg-white/90 rounded-r-full px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="25"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
