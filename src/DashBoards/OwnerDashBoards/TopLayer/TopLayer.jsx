import React from 'react';
import { Link } from 'react-router-dom';

const TopLayer = ({ ownerName = "Owner" }) => {
  return (
    <div className="bg-violet-50 py-10 px-4 text-center rounded-b-2xl shadow-md">
      {/* Welcome Message */}
      <h1 className="text-3xl font-bold text-black mb-6">
        Welcome, {ownerName || "Owner"}!
      </h1>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          to="AddProperty"
          className="btn bg-violet-600 hover:bg-violet-700 text-white border-none shadow-md px-6 py-2 rounded-lg transition-all"
        >
          Add Property
        </Link>
        <Link
          to="MyProperty"
          className="btn bg-white hover:bg-gray-100 text-black border border-gray-300 shadow-sm px-6 py-2 rounded-lg transition-all"
        >
          My Property
        </Link>
      </div>
    </div>
  );
};

export default TopLayer;
