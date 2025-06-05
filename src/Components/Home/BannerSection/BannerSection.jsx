import React, { useState } from "react";

const BannerSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Replace with your navigation or filter logic
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-full bg-gradient-to-r from-fuchsia-800 via-fuchsia-700 to-fuchsia-600 text-white py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Find Your Perfect Home
        </h1>

        <p className="text-base sm:text-lg md:text-xl">
          Discover top rental properties with ease, security, and speed.{" "}
          <span className="font-semibold">MyRentalHub</span>
        </p>

        {/* Search bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <input
            type="text"
            placeholder="Search by location or property..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-full sm:w-2/3 px-4 py-3 rounded-md text-black"
          />
          <button
            onClick={handleSearch}
            className="btn bg-white text-fuchsia-700 hover:bg-fuchsia-100 font-semibold px-6 py-3 rounded-md w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
