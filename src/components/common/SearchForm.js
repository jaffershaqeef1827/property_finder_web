// SearchForm.jsx
import React, { useState } from "react";

const SearchForm = () => {
  const [activeTab, setActiveTab] = useState("rent");

  return (
    <div className=" rounded-xl  xl:w-[820px]">
      <div className="flex   bg-white  rounded-t-md overflow-hidden w-fit">
        <button
          onClick={() => setActiveTab("rent")}
          className={`px-6 py-2 font-medium transition-colors ${
            activeTab === "rent"
              ? "text-red-500 border-b-4 border-red-500"
              : " text-gray-700 hover:bg-gray-100"
          }`}
        >
          Rent
        </button>
        <button
          onClick={() => setActiveTab("buy")}
          className={`px-6 py-2 font-medium transition-colors ${
            activeTab === "buy"
              ? "text-red-500 border-b-4 border-red-500"
              : " text-gray-700 hover:bg-gray-100"
          }`}
        >
          Buy
        </button>
      </div>

      <div className="flex items-center pr-3 py-2 gap-4 rounded-lg bg-white/50 backdrop-blur-md border-white/20 ">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-10 bg-transparent border-l-black border-r-2 outline-none"
          />

          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="relative flex-1">
          <select className="w-full bg-transparent appearance-none border-l-black border-r-2 outline-none">
            <option value="">Property type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="commercial">Commercial</option>
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
          Browse Properties
        </button>
      </div>
    </div>
    // {/* <div class="relative min-h-screen bg-cover bg-center" >
    // <div class="flex items-center justify-center min-h-screen">
    //   <div class="p-8 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
    //     <h1 class="text-2xl font-bold text-white">Glassy Effect</h1>
    //     <p class="text-white/80 mt-2">Now you can see the background through me.</p>
    //   </div>
    // </div>
    // </div> */}
  );
};

export default SearchForm;
