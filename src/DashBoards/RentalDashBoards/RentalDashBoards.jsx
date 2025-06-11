import React, { useState } from 'react';
import PropertiesFilter from './PropertiesFilter/PropertiesFilter';
import PropertiesDisplay from './PropertiesDisplay/PropertiesDisplay';

const RentalDashBoards = () => {
  const [filters, setFilters] = useState({});

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 py-6">
      {/* Sidebar Filter */}
      <div className="w-full md:w-1/4 lg:w-1/5">
        <PropertiesFilter onFilter={handleFilter} />
      </div>

      {/* Product Cards */}
      <div className="w-full md:w-3/4 lg:w-4/5">
        <PropertiesDisplay filters={filters} />
      </div>
    </div>
  );
};

export default RentalDashBoards;
