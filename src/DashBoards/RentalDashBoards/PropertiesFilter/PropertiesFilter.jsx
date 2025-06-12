import React, { useState, useEffect } from "react";

const PropertiesFilter = ({ properties = [], onFilter }) => {
  const [filters, setFilters] = useState({
    location: "",
    priceRange: "",
    bedrooms: "",
    type: "",
  });

  useEffect(() => {
    handleFilter();
  }, [filters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilter = () => {
    if (!onFilter) return;

    const filteredProperties = properties.filter((property) => {
      if (
        filters.location &&
        !property.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      if (filters.priceRange) {
        const price = parseInt(property.rent);
        const [min, max] = filters.priceRange.split("-").map(Number);
        if (max === 0) {
          if (price < min) return false;
        } else {
          if (price < min || price > max) return false;
        }
      }

      if (filters.bedrooms && property.bedrooms !== filters.bedrooms) {
        return false;
      }

      if (
        filters.type &&
        property.type.toLowerCase() !== filters.type.toLowerCase()
      ) {
        return false;
      }

      return true;
    });

    onFilter(filteredProperties);
  };

  const handleReset = () => {
    setFilters({
      location: "",
      priceRange: "",
      bedrooms: "",
      type: "",
    });
    onFilter(properties);
  };

  return (
    <div className="bg-violet-100 text-black p-6 rounded-2xl shadow-lg w-full h-full sticky top-4">
      <h2 className="text-xl font-bold mb-4 text-black">Filter Properties</h2>

      <div className="flex flex-col gap-4">
        {/* Location Filter */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-1 text-black">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="w-full p-2 rounded-lg border border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500 text-black bg-white"
          />
        </div>

        {/* Price Range Filter */}
        <div>
          <label htmlFor="priceRange" className="block text-sm font-medium mb-1 text-black">
            Price Range
          </label>
          <select
            id="priceRange"
            name="priceRange"
            value={filters.priceRange}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500 text-black bg-white"
          >
            <option value="">Select Price Range</option>
            <option value="0-5000">Below ₹5,000</option>
            <option value="5000-10000">₹5,000 - ₹10,000</option>
            <option value="10000-15000">₹10,000 - ₹15,000</option>
            <option value="15000-20000">₹15,000 - ₹20,000</option>
            <option value="20000-0">Above ₹20,000</option>
          </select>
        </div>

        {/* Bedrooms Filter */}
        <div>
          <label htmlFor="bedrooms" className="block text-sm font-medium mb-1 text-black">
            Bedrooms
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500 text-black bg-white"
          >
            <option value="">Select BHK</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4+ BHK</option>
          </select>
        </div>

        {/* Property Type Filter */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium mb-1 text-black">
            Property Type
          </label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500 text-black bg-white"
          >
            <option value="">Select Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">Independent House</option>
            <option value="pg">PG</option>
            <option value="studio">Studio</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleFilter}
            className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
          >
            Apply Filters
          </button>
          <button
            onClick={handleReset}
            className="flex-1 bg-black hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesFilter;
