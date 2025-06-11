import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { authentication } from "../../../FirebaseConfig/config";

const BannerSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rentalName, setRentalName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      if (user) {
        console.log("🔐 Authenticated user:", user);
        setRentalName(user.displayName || "Rental")
      } else{
        console.log("🚫 No user logged in")
      }
    })

    return () => unsubscribe()
  }, [])

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-full bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700 text-white py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        
        {/* Welcome message */}
        <p className="text-lg md:text-xl text-violet-100 font-medium">
          Welcome, <span className="text-violet-200 font-bold">{rentalName || "Rental"}</span> – Your Trusted Rental Partner
        </p>

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


{/* <p className="text-lg md:text-xl font-medium text-violet-100">
          Hey <span className="text-violet-300 font-bold">{rentalName}</span> 👋, welcome back to
          <span className="text-violet-200 font-bold"> MyRentalHub</span>! Let’s help you find a comfy place to call home.
        </p> */}