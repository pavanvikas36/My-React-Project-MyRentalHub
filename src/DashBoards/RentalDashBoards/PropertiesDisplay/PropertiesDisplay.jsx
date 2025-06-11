// import React, { useEffect, useState } from 'react'
// import { collection, getDoc, getDocs } from 'firebase/firestore'
// import { db } from '../../../FirebaseConfig/config' 

// const PropertiesDisplay = () => {
//   const [allProperties, setAllProperties] = useState([])

//   useEffect(()=>{
//     const fetchingProperties = async()=>{
//         try{
//             const ownersPropertiesRef = collection(db, "Owners")
//             const allOwnerProperties = await getDocs(ownersPropertiesRef)
//             // console.log(allOwnerProperties.docs)
//             allOwnerProperties.docs.map((singleProperty)=>{
//                 console.log(singleProperty.data().properties)
//             })
//         }
//         catch(error){
//             console.error(error)
//         }
//     }
//     fetchingProperties()
//   }, [])
//   return (
//     <div>
//       PropertiesDisplay
//     </div>
//   )
// }

// export default PropertiesDisplay


// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';

// const PropertiesDisplay = () => {
//   const [allProperties, setAllProperties] = useState([]);

//   useEffect(() => {
//     const fetchingProperties = async () => {
//       try {
//         const ownersPropertiesRef = collection(db, "Owners");
//         const allOwnerDocs = await getDocs(ownersPropertiesRef);

//         let combinedProperties = [];

//         allOwnerDocs.docs.forEach((doc) => {
//           const ownerData = doc.data();
//           const properties = ownerData.properties || [];

//           const propertiesWithOwner = properties.map((property) => ({
//             ...property,
//             ownerId: doc.id,
//           }));

//           combinedProperties = [...combinedProperties, ...propertiesWithOwner];
//         });

//         setAllProperties(combinedProperties);
//       } catch (error) {
//         console.error("Error fetching properties:", error);
//       }
//     };

//     fetchingProperties();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4 text-violet-800">All Rental Properties</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {allProperties.map((property, index) => (
//           <div
//             key={index}
//             className="card card-side bg-base-100 shadow-xl border border-violet-200"
//           >
//             <figure className="w-1/3">
//               <img
//                 src={property.image || "https://via.placeholder.com/200x150?text=No+Image"}
//                 alt={property.title || "Rental Property"}
//                 className="w-full h-full object-cover"
//               />
//             </figure>
//             <div className="card-body w-2/3">
//               <h2 className="card-title text-violet-700">{property.title || "Untitled Property"}</h2>
//               <p><strong>Location:</strong> {property.location || "N/A"}</p>
//               <p><strong>Price:</strong> ₹{property.price || "N/A"}</p>
//               <p><strong>BHK:</strong> {property.bhk || "N/A"}</p>
//               <p><strong>Type:</strong> {property.type || "N/A"}</p>
//               <div className="card-actions justify-end">
//                 <button className="btn btn-primary">View</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertiesDisplay;


// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';
// import { useNavigate } from "react-router-dom";

// const PropertiesDisplay = () => {
//   const [allProperties, setAllProperties] = useState([]);
//   const navigate = useNavigate();

//   const handleCardClick = (propertyId) => {
//     // navigate(`/property/${propertyId}`);
//     console.log(propertyId)
//   };

//   useEffect(() => {
//     const fetchingProperties = async () => {
//       try {
//         const ownersPropertiesRef = collection(db, "Owners");
//         const allOwnerDocs = await getDocs(ownersPropertiesRef);

//         let combinedProperties = [];

//         allOwnerDocs.docs.forEach((doc) => {
//           const ownerData = doc.data();
//           const properties = ownerData.properties || [];

//           const propertiesWithOwner = properties.map((property) => ({
//             ...property,
//             ownerId: doc.id,
//           }));

//           combinedProperties = [...combinedProperties, ...propertiesWithOwner];
//         });

//         setAllProperties(combinedProperties);
//       } catch (error) {
//         console.error("Error fetching properties:", error);
//       }
//     };

//     fetchingProperties();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4 text-violet-800">All Rental Properties</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {allProperties.map((property, index) => {
//           const firstImage = property.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image";

//           return (
//             <div
//               key={index}
//               className="card card-side bg-base-100 shadow-xl border border-violet-200 overflow-hidden h-60 cursor-pointer hover:shadow-2xl transition"
//               onClick={() => handleCardClick(property.id)}
//             >
//               {/* Image Section */}
//               <figure className="w-1/2 h-full">
//                 <img
//                   src={firstImage}
//                   alt={property.title || "Rental Property"}
//                   className="w-full h-full object-cover"
//                 />
//               </figure>

//               {/* Text Section */}
//               <div className="card-body w-1/2 p-4 overflow-hidden">
//                 <h2 className="card-title text-violet-700 text-base font-semibold leading-tight">
//                   {property.title || "Untitled Property"}
//                 </h2>
//                 <p className="text-sm"><strong>Location:</strong> {property.location || "N/A"}</p>
//                 <p className="text-sm"><strong>Price:</strong> ₹{property.rent || "N/A"}</p>
//                 <p className="text-sm"><strong>Bedrooms:</strong> {property.bedrooms || "N/A"}</p>
//                 <p className="text-sm"><strong>Type:</strong> {property.type || "N/A"}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PropertiesDisplay;


// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';
// import { useNavigate } from "react-router-dom";

// const PropertiesDisplay = () => {
//   const [allProperties, setAllProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleCardClick = (ownerId, propertyId) => {
//     if (!ownerId || !propertyId) {
//       console.error("Missing IDs:", { ownerId, propertyId });
//       return;
//     }
//     navigate(`/property/${ownerId}/${propertyId}`);
//   };

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const ownersPropertiesRef = collection(db, "Owners");
//         const allOwnerDocs = await getDocs(ownersPropertiesRef);

//         let combinedProperties = [];

//         allOwnerDocs.docs.forEach((ownerDoc) => {
//           const ownerData = ownerDoc.data();
//           const properties = ownerData.properties || [];

//           const propertiesWithIds = properties.map((property) => ({
//             ...property,
//             id: property.id, // Ensure this matches your Firestore structure
//             ownerId: ownerDoc.id,
//           }));

//           combinedProperties = [...combinedProperties, ...propertiesWithIds];
//         });

//         setAllProperties(combinedProperties);
//       } catch (err) {
//         console.error("Error fetching properties:", err);
//         setError("Failed to load properties. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   // Loading, error, and empty states remain the same as your original code
//   // ...

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4 text-violet-800">All Rental Properties</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {allProperties.map((property) => (
//           <PropertyCard 
//             key={`${property.ownerId}_${property.id}`}
//             property={property}
//             onClick={() => handleCardClick(property.ownerId, property.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const PropertyCard = ({ property, onClick }) => {
//   const firstImage = property.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image";

//   return (
//     <div 
//       className="card bg-base-100 shadow-xl border border-violet-200 hover:shadow-2xl transition cursor-pointer"
//       onClick={onClick}
//     >
//       <figure className="h-48">
//         <img
//           src={firstImage}
//           alt={property.title || "Rental Property"}
//           className="w-full h-full object-cover"
//         />
//       </figure>
//       <div className="card-body p-4">
//         <h2 className="card-title text-violet-700">{property.title || "Untitled Property"}</h2>
//         <div className="space-y-1">
//           <PropertyDetail label="Location" value={property.location} />
//           <PropertyDetail label="Price" value={`₹${property.rent?.toLocaleString()}`} />
//           <PropertyDetail label="Bedrooms" value={property.bedrooms} />
//           <PropertyDetail label="Type" value={property.type} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const PropertyDetail = ({ label, value }) => (
//   <p className="text-sm">
//     <span className="font-semibold">{label}:</span> {value || "N/A"}
//   </p>
// );

// export default PropertiesDisplay;


import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../FirebaseConfig/config';
import { useNavigate } from "react-router-dom";

const PropertiesDisplay = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const ownersPropertiesRef = collection(db, "Owners");
        const allOwnerDocs = await getDocs(ownersPropertiesRef);

        let combinedProperties = [];

        allOwnerDocs.docs.forEach((ownerDoc) => {
          const ownerData = ownerDoc.data();
          const properties = ownerData.properties || [];

          const propertiesWithIds = properties.map((property, index) => {
            // If property doesn't have ID, create a consistent one
            if (!property.id) {
              const generatedId = `prop_${ownerDoc.id}_${index}_${Date.now()}`;
              console.warn(`Generated ID for property under owner ${ownerDoc.id}: ${generatedId}`);
              return {
                ...property,
                id: generatedId,
                ownerId: ownerDoc.id,
                hasGeneratedId: true
              };
            }
            return {
              ...property,
              ownerId: ownerDoc.id,
              hasGeneratedId: false
            };
          });

          combinedProperties = [...combinedProperties, ...propertiesWithIds];
        });

        setAllProperties(combinedProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleCardClick = (ownerId, propertyId) => {
    if (!propertyId) {
      console.error("Cannot navigate - property ID missing");
      return;
    }
    navigate(`/property/${ownerId}/${propertyId}`);
  };

  if (loading) return <div>Loading properties...</div>;
  if (allProperties.length === 0) return <div>No properties available</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {allProperties.map((property) => (
        <div 
          key={`${property.ownerId}_${property.id}`}
          className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
          onClick={() => handleCardClick(property.ownerId, property.id)}
        >
          <img
            src={property.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg">{property.title}</h3>
            <p className="text-gray-600">₹{property.rent?.toLocaleString()}/month</p>
            <p className="text-sm">{property.location}</p>
            {property.hasGeneratedId && (
              <p className="text-xs text-yellow-600">Temporary ID assigned</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertiesDisplay;