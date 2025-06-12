// import React, { useState } from 'react';
// import PropertiesFilter from './PropertiesFilter/PropertiesFilter';
// import PropertiesDisplay from './PropertiesDisplay/PropertiesDisplay';

// const RentalDashBoards = () => {
//   const [filters, setFilters] = useState({});

//   const handleFilter = (newFilters) => {
//     setFilters(newFilters);
//   };

//   return (
//     <div className="h-screen flex">
//       {/* Sidebar Filter */}
//       <div className="w-1/4 p-4">
//         <div className="sticky top-4">
//           <PropertiesFilter onFilter={handleFilter} />
//         </div>
//       </div>

//       {/* Scrollable PropertiesDisplay */}
//       <div className="w-3/4 p-4 overflow-y-auto h-screen">
//         <PropertiesDisplay filters={filters} />
//       </div>
//     </div>
//   );
// };

// export default RentalDashBoards;


// import React, { useEffect, useState } from 'react';
// import PropertiesFilter from './PropertiesFilter/PropertiesFilter';
// import PropertiesDisplay from './PropertiesDisplay/PropertiesDisplay';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../FirebaseConfig/config';

// const RentalDashBoards = () => {
//   const [filters, setFilters] = useState({});
//   const [allProperties, setAllProperties] = useState([]);
//   // const [ownersList, setOwnersList] = useState([]);

//   const handleFilter = (newFilters) => {
//     setFilters(newFilters);
//   };

//   // Fetch data from Firestore on mount
//   useEffect(() => {
//     const fetchingProperties = async () => {
//       try {
//         const ownersPropertiesRef = collection(db, 'Owners');
//         const allOwnerProperties = await getDocs(ownersPropertiesRef);
//         console.log(allOwnerProperties)
//         let propertiesFromDoc = [];
//         // let ownersDetailsList = [];

//         allOwnerProperties.docs.forEach((singleOwnerDoc) => {
//           const ownerData = singleOwnerDoc.data();
//           const individualProperties = ownerData.properties || [];

//           // Save owner info (you can also use singleOwnerDoc.id if needed)
//           // const ownerInfo = {
//           //   name: ownerData.name || 'Unknown',
//           //   email: ownerData.email || 'Not Provided',
//           // };
//           // ownersDetailsList.push(ownerInfo)

//           // Save properties
//           individualProperties.forEach((property) => {
//             propertiesFromDoc.push({...property, 
//               owner: {
//                 name: ownerData.name || 'Unknown',
//                 email: ownerData.email || 'Not Provided',
//               }
//             });
//           });
//         });

//         // console.log(propertiesFromDoc)
//         setAllProperties(propertiesFromDoc);
//         // setOwnersList(ownersDetailsList)
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };

//     fetchingProperties();
//   }, []);
//   console.log(allProperties)

//   return (
//     <div className="h-screen flex">
//       {/* Sidebar Filter */}
//       <div className="w-1/4 p-4">
//         <div className="sticky top-4">
//           <PropertiesFilter onFilter={handleFilter} />
//         </div>
//       </div>

//       {/* Scrollable PropertiesDisplay */}
//       <div className="w-3/4 p-4 overflow-y-auto h-screen">
//         <PropertiesDisplay allProperties={allProperties} />
//       </div>
//     </div>
//   );
// };

// export default RentalDashBoards;


import React, { useEffect, useState } from 'react';
import PropertiesFilter from './PropertiesFilter/PropertiesFilter';
import PropertiesDisplay from './PropertiesDisplay/PropertiesDisplay';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FirebaseConfig/config';
import Footer from '../../Components/Footer/Footer';

const RentalDashBoards = () => {
  const [filters, setFilters] = useState({});
  const [allProperties, setAllProperties] = useState([]);
  const [showFilter, setShowFilter] = useState(false); // For mobile toggle
  const [filteredProperties, setFilteredProperties] = useState([]);

  const handleFilter = (newFilteredList) => {
    setFilteredProperties(newFilteredList);
  };

  useEffect(() => {
    const fetchingProperties = async () => {
      try {
        const ownersPropertiesRef = collection(db, 'Owners');
        const allOwnerProperties = await getDocs(ownersPropertiesRef);
        let propertiesFromDoc = [];

        allOwnerProperties.docs.forEach((singleOwnerDoc) => {
          const ownerData = singleOwnerDoc.data();
          const individualProperties = ownerData.properties || [];

          individualProperties.forEach((property) => {
            propertiesFromDoc.push({
              ...property,
              owner: {
                name: ownerData.name || 'Unknown',
                email: ownerData.email || 'Not Provided',
              },
            });
          });
        });

        setAllProperties(propertiesFromDoc);
        setFilteredProperties(propertiesFromDoc); 
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchingProperties();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Mobile Toggle Filter Button */}
      <div className="md:hidden p-4">
        <button
          className="bg-violet-700 text-white px-4 py-2 rounded-md"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          {showFilter ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Sidebar Filter */}
      <div
        className={`${
          showFilter ? 'block' : 'hidden'
        } md:block md:w-1/4 p-4`}
      >
        <div className="md:sticky md:top-4">
          <PropertiesFilter properties={allProperties} onFilter={handleFilter} />
        </div>
      </div>

      {/* Properties Display */}
      <div className="md:w-3/4 p-4 overflow-y-auto h-full">
        <PropertiesDisplay allProperties={filteredProperties} />
      </div>
    </div>
  );
};

export default RentalDashBoards;
