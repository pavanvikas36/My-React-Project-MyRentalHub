import React, { useState } from 'react';
import PropertiesFilter from './PropertiesFilter/PropertiesFilter';
import PropertiesDisplay from './PropertiesDisplay/PropertiesDisplay';

const RentalDashBoards = () => {
  const [filters, setFilters] = useState({});

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar Filter */}
      <div className="w-1/4 p-4">
        <div className="sticky top-4">
          <PropertiesFilter onFilter={handleFilter} />
        </div>
      </div>

      {/* Scrollable PropertiesDisplay */}
      <div className="w-3/4 p-4 overflow-y-auto h-screen">
        <PropertiesDisplay filters={filters} />
      </div>
    </div>
  );
};

export default RentalDashBoards;
