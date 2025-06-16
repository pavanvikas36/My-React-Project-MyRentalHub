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
//             let propertiesFromDoc = []
//             // console.log(allOwnerProperties.docs)
//             allOwnerProperties.docs.map((singleOwnerDoc)=>{
//               const ownerData = singleOwnerDoc.data();
//               const individualProperties = ownerData.properties || [];
//               individualProperties.map((property) => {
//                 propertiesFromDoc.push(property);
//               })
//               console.log(propertiesFromDoc)
//               setAllProperties(allOwnerProperties)
//             })
//         }
//         catch(error){
//           console.error('Error fetching properties:', error);
//         }
//     }
//     fetchingProperties()
//   }, [])
//   return (
//     <div>
//       {allProperties.length > 0 ? <>
        
//       </> : <>
//         <p>No Jobs Found</p>
//       </>}
//     </div>
//   )
// }

// export default PropertiesDisplay



// Importent
// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';

// const PropertiesDisplay = () => {
//   const [allProperties, setAllProperties] = useState([]);

//   useEffect(() => {
//     const fetchingProperties = async () => {
//       try {
//         const ownersPropertiesRef = collection(db, "Owners");
//         const allOwnerProperties = await getDocs(ownersPropertiesRef);
//         let propertiesFromDoc = [];

//         allOwnerProperties.docs.forEach((singleOwnerDoc) => {
//           const ownerData = singleOwnerDoc.data();
//           const individualProperties = ownerData.properties || [];
//           individualProperties.forEach((property) => {
//             propertiesFromDoc.push(property);
//           });
//         });

//         setAllProperties(propertiesFromDoc);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };
//     fetchingProperties();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 rounded-2xl min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-black text-center">Available Rental Properties</h2>
//       {allProperties.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {allProperties.map((property, index) => {
//             const images = property.images?.slice(0, 3) || [];
//             return (
//               <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
//                 <div className="relative h-56 w-full">
//                   <div className="carousel w-full h-full">
//                     {images.map((image, imgIndex) => (
//                       <div
//                         key={imgIndex}
//                         className={`carousel-item w-full h-full ${imgIndex === 0 ? 'block' : 'hidden'}`}
//                         style={{
//                           backgroundImage: `url(${image})`,
//                           backgroundSize: 'cover',
//                           backgroundPosition: 'center'
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="p-4 text-black cursor-pointer">
//                   <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
//                   <p className="text-sm"><strong>Location:</strong> {property.location}</p>
//                   <p className="text-sm"><strong>Rent:</strong> ₹{property.rent}</p>
//                   <p className="text-sm"><strong>Available From:</strong> {property.availableFrom}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-center text-black text-lg">No Properties Found</p>
//       )}
//     </div>
//   );
// };

// export default PropertiesDisplay;



// Important 2
// import React from 'react';

// const PropertiesDisplay = ({ allProperties = [] }) => {
//   console.log("Received Properties:", allProperties);
//   return (
//     <div className="p-6 bg-gray-100 rounded-2xl min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-black text-center">Available Rental Properties</h2>
//       {allProperties.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {allProperties.map((property, index) => {
//             const images = property.images?.slice(0, 3) || [];
//             return (
//               <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
//                 <div className="relative h-56 w-full">
//                   <div className="carousel w-full h-full">
//                     {images.map((image, imgIndex) => (
//                       <div
//                         key={imgIndex}
//                         className={`carousel-item w-full h-full ${imgIndex === 0 ? 'block' : 'hidden'}`}
//                         style={{
//                           backgroundImage: `url(${image})`,
//                           backgroundSize: 'cover',
//                           backgroundPosition: 'center'
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="p-4 text-black cursor-pointer">
//                   <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
//                   <p className="text-sm"><strong>Location:</strong> {property.location}</p>
//                   <p className="text-sm"><strong>Rent:</strong> ₹{property.rent}</p>
//                   <p className="text-sm"><strong>Available From:</strong> {property.availableFrom}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-center text-black text-lg">No Properties Found</p>
//       )}
//     </div>
//   );
// };

// export default PropertiesDisplay;


// Important Code
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const PropertiesDisplay = ({ allProperties }) => {
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const navigate = useNavigate()
//   console.log(allProperties)

//   // Optional: log the updated state when it changes
//   useEffect(() => {
//     if (selectedProperty) {
//       console.log("Selected Property:", selectedProperty);
//     }
//   }, [selectedProperty]);

//   const handlePropertyClick = (property) => {
//     const user = localStorage.getItem("loggedinRental");

//     if(user){
//       setSelectedProperty(property);
//       navigate("/propertydetails", { state: { selectedProperty: property } });
//     }else{
//       navigate("/login");
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 rounded-2xl min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-black text-center">Available Rental Properties</h2>

//       {allProperties.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {allProperties.map((property, index) => {
//             const images = property.images?.slice(0, 3) || [];

//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
//                 onClick={() => handlePropertyClick(property)}
//               >
//                 <div className="relative h-56 w-full">
//                   <div className="carousel w-full h-full">
//                     {images.map((image, imgIndex) => (
//                       <div
//                         key={imgIndex}
//                         className={`carousel-item w-full h-full ${imgIndex === 0 ? 'block' : 'hidden'}`}
//                         style={{
//                           backgroundImage: `url(${image})`,
//                           backgroundSize: 'cover',
//                           backgroundPosition: 'center'
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="p-4 text-black">
//                   <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
//                   <p className="text-sm"><strong>Location:</strong> {property.location}</p>
//                   <p className="text-sm"><strong>Rent:</strong> ₹{property.rent}</p>
//                   <p className="text-sm"><strong>Available From:</strong> {property.availableFrom}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-center text-black text-lg">No Properties Found</p>
//       )}
//     </div>
//   );
// };

// export default PropertiesDisplay;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PropertiesDisplay = ({ allProperties }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [allProperties]);

  useEffect(() => {
    if (selectedProperty) {
      console.log("Selected Property:", selectedProperty);
    }
  }, [selectedProperty]);

  const handlePropertyClick = (property) => {
    const user = localStorage.getItem("loggedinRental");
    const guestUser = localStorage.getItem("guestUser");

    if (user || guestUser) {
      setSelectedProperty(property);
      navigate("/propertydetails", { state: { selectedProperty: property } });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-2xl min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-black text-center">Available Rental Properties</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-violet-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : allProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProperties.map((property, index) => {
            const images = property.images?.slice(0, 3) || [];

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                onClick={() => handlePropertyClick(property)}
              >
                <div className="relative h-56 w-full">
                  <div className="carousel w-full h-full">
                    {images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`carousel-item w-full h-full ${imgIndex === 0 ? 'block' : 'hidden'}`}
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-4 text-black">
                  <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                  <p className="text-sm"><strong>Location:</strong> {property.location}</p>
                  <p className="text-sm"><strong>Rent:</strong> ₹{property.rent}</p>
                  <p className="text-sm"><strong>Available From:</strong> {property.availableFrom}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-black text-lg">No Properties Found</p>
      )}
    </div>
  );
};

export default PropertiesDisplay;




// Auto carousel Code
// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';
// import { useNavigate } from 'react-router-dom';

// const PropertiesDisplay = () => {
//   const [allProperties, setAllProperties] = useState([]);
//   const [currentImageIndexes, setCurrentImageIndexes] = useState({});
//   const navigate = useNavigate();

//   // Fetch properties from Owners collection
//   useEffect(() => {
//     const fetchingProperties = async () => {
//       try {
//         const ownersPropertiesRef = collection(db, "Owners");
//         const allOwnerProperties = await getDocs(ownersPropertiesRef);
//         let propertiesFromDoc = [];

//         allOwnerProperties.docs.forEach((singleOwnerDoc) => {
//           const ownerData = singleOwnerDoc.data();
//           const individualProperties = ownerData.properties || [];
//           individualProperties.forEach((property) => {
//             propertiesFromDoc.push(property);
//           });
//         });

//         setAllProperties(propertiesFromDoc);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };
//     fetchingProperties();
//   }, []);

//   // Auto slide carousel images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndexes((prev) => {
//         const updatedIndexes = {};
//         allProperties.forEach((_, index) => {
//           const images = allProperties[index]?.images || [];
//           const currentIndex = prev[index] || 0;
//           updatedIndexes[index] = (currentIndex + 1) % images.length;
//         });
//         return updatedIndexes;
//       });
//     }, 1000); // 3 seconds
//     return () => clearInterval(interval);
//   }, [allProperties]);

//   return (
//     <div className="p-6 bg-gray-100 rounded-2xl min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-black text-center">Available Rental Properties</h2>
//       {allProperties.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {allProperties.map((property, index) => {
//             const images = property.images?.slice(0, 3) || [];
//             const currentImageIndex = currentImageIndexes[index] || 0;

//             return (
//               <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
//                 {/* Carousel Image */}
//                 <div
//                   className="relative h-56 w-full"
//                   style={{
//                     backgroundImage: `url(${images[currentImageIndex] || 'https://via.placeholder.com/400x300'})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     transition: 'background-image 0.5s ease-in-out'
//                   }}
//                 ></div>

//                 {/* Text Section - Clickable */}
//                 <div
//                   className="p-4 text-black cursor-pointer hover:bg-gray-100 transition"
//                   onClick={() => navigate(`/property/${property.id}`)}
//                 >
//                   <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
//                   <p className="text-sm"><strong>Location:</strong> {property.location}</p>
//                   <p className="text-sm"><strong>Rent:</strong> ₹{property.rent}</p>
//                   <p className="text-sm"><strong>Available From:</strong> {property.availableFrom}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-center text-black text-lg">No Properties Found</p>
//       )}
//     </div>
//   );
// };

// export default PropertiesDisplay;


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


// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';
// import { useNavigate } from "react-router-dom";

// const PropertiesDisplay = () => {
//   const [allProperties, setAllProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const ownersPropertiesRef = collection(db, "Owners");
//         const allOwnerDocs = await getDocs(ownersPropertiesRef);

//         let combinedProperties = [];

//         allOwnerDocs.docs.forEach((ownerDoc) => {
//           const ownerData = ownerDoc.data();
//           const properties = ownerData.properties || [];

//           const propertiesWithIds = properties.map((property, index) => {
//             // If property doesn't have ID, create a consistent one
//             if (!property.id) {
//               const generatedId = `prop_${ownerDoc.id}_${index}_${Date.now()}`;
//               console.warn(`Generated ID for property under owner ${ownerDoc.id}: ${generatedId}`);
//               return {
//                 ...property,
//                 id: generatedId,
//                 ownerId: ownerDoc.id,
//                 hasGeneratedId: true
//               };
//             }
//             return {
//               ...property,
//               ownerId: ownerDoc.id,
//               hasGeneratedId: false
//             };
//           });

//           combinedProperties = [...combinedProperties, ...propertiesWithIds];
//         });

//         setAllProperties(combinedProperties);
//       } catch (error) {
//         console.error("Error fetching properties:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   const handleCardClick = (ownerId, propertyId) => {
//     if (!propertyId) {
//       console.error("Cannot navigate - property ID missing");
//       return;
//     }
//     navigate(`/property/${ownerId}/${propertyId}`);
//   };

//   if (loading) return <div>Loading properties...</div>;
//   if (allProperties.length === 0) return <div>No properties available</div>;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {allProperties.map((property) => (
//         <div 
//           key={`${property.ownerId}_${property.id}`}
//           className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
//           onClick={() => handleCardClick(property.ownerId, property.id)}
//         >
//           <img
//             src={property.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
//             alt={property.title}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h3 className="font-bold text-lg">{property.title}</h3>
//             <p className="text-gray-600">₹{property.rent?.toLocaleString()}/month</p>
//             <p className="text-sm">{property.location}</p>
//             {property.hasGeneratedId && (
//               <p className="text-xs text-yellow-600">Temporary ID assigned</p>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PropertiesDisplay;