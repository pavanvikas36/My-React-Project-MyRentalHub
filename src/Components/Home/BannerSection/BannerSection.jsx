import React, { useState } from "react";

const BannerSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-full bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700 text-white py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-violet-50">
          Find Your Perfect Home
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-violet-100">
          Discover top rental properties with ease, security, and speed.{" "}
          <span className="font-semibold text-violet-200">MyRentalHub</span>
        </p>

        {/* Search bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <input
            type="text"
            placeholder="Search by location or property..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-3 rounded-md text-violet-900 bg-violet-50 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <button
            onClick={handleSearch}
            className="bg-violet-200 hover:bg-violet-300 text-violet-900 font-semibold px-6 py-3 rounded-md w-full sm:w-auto transition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
