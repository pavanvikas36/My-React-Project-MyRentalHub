// import React from 'react';
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const PropertyCardGrid = ({ properties }) => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const topSixProperties = properties.slice(0, 6); // ✅ Only get the first 6 properties

//   return (
//     <div className="p-6 bg-gray-100">
//       <h2 className="text-3xl font-extrabold text-center mb-6 text-black-700 tracking-wide">
//         🏡 Discover Your Dream Rental Home
//       </h2>
//       {topSixProperties.length === 0 ? (
//         <p className="text-center text-gray-600">No properties available.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//           {topSixProperties.map((property, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 border border-gray-100"
//             >
//               <img
//                 src={property.images?.[0] || 'https://via.placeholder.com/300x200'}
//                 alt={property.title}
//                 className="h-40 w-full object-cover rounded-xl mb-4"
//               />
//               <h3 className="text-lg font-semibold text-black-700 truncate">{property.title}</h3>
//               <p className="text-sm text-gray-700">📍 {property.location}</p>
//               <p className="text-sm text-gray-700">💰 ₹{property.rent}</p>
//               <p className="text-sm text-gray-500">👤 {property.owner.name}</p>
//               <p className="text-sm text-gray-500">📧 {property.owner.email}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertyCardGrid;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PropertyCardGrid = ({ properties }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const topSixProperties = properties.slice(0, 6); // ✅ Only get the first 6 properties

  return (
    <div className="p-6 bg-gray-100" data-aos="fade-up">
      <h2
        className="text-3xl font-extrabold text-center mb-6 text-black-700 tracking-wide"
        data-aos="fade-up"
      >
        🏡 Discover Your Dream Rental Home
      </h2>
      {topSixProperties.length === 0 ? (
        <p className="text-center text-gray-600" data-aos="fade-in">
          No properties available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {topSixProperties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 border border-gray-100"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={property.images?.[0] || 'https://via.placeholder.com/300x200'}
                alt={property.title}
                className="h-40 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-black-700 truncate">
                {property.title}
              </h3>
              <p className="text-sm text-gray-700">📍 {property.location}</p>
              <p className="text-sm text-gray-700">💰 ₹{property.rent}</p>
              <p className="text-sm text-gray-500">👤 {property.owner.name}</p>
              <p className="text-sm text-gray-500">📧 {property.owner.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyCardGrid;
