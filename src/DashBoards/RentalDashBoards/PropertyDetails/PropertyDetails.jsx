// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';

// const PropertyDetails = () => {
//   const { ownerId, propertyId } = useParams();
//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         const ownerRef = doc(db, "Owners", ownerId);
//         const ownerSnap = await getDoc(ownerRef);

//         if (ownerSnap.exists()) {
//           const properties = ownerSnap.data().properties || [];
//           const foundProperty = properties.find(p => p.id === propertyId);
          
//           if (foundProperty) {
//             setProperty(foundProperty);
//           }
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperty();
//   }, [ownerId, propertyId]);

//   // Auto-rotate images every 3 seconds
//   useEffect(() => {
//     if (!property?.images?.length) return;

//     const interval = setInterval(() => {
//       setCurrentImageIndex(prev => 
//         prev === property.images.length - 1 ? 0 : prev + 1
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [property?.images]);

//   if (loading) return <div>Loading...</div>;
//   if (!property) return <div>Property not found</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8">{property.title}</h1>
      
//       {/* Image Carousel */}
//       <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
//         {property.images?.length > 0 ? (
//           <>
//             <img
//               src={property.images[currentImageIndex]}
//               alt={`${property.title} - Image ${currentImageIndex + 1}`}
//               className="w-full h-96 object-cover transition-opacity duration-500"
//             />
            
//             {/* Navigation Dots */}
//             <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//               {property.images.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImageIndex(index)}
//                   className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'}`}
//                   aria-label={`Go to image ${index + 1}`}
//                 />
//               ))}
//             </div>
            
//             {/* Navigation Arrows */}
//             <button
//               onClick={() => setCurrentImageIndex(prev => 
//                 prev === 0 ? property.images.length - 1 : prev - 1
//               )}
//               className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
//               aria-label="Previous image"
//             >
//               &lt;
//             </button>
//             <button
//               onClick={() => setCurrentImageIndex(prev => 
//                 prev === property.images.length - 1 ? 0 : prev + 1
//               )}
//               className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
//               aria-label="Next image"
//             >
//               &gt;
//             </button>
//           </>
//         ) : (
//           <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
//             <span>No images available</span>
//           </div>
//         )}
//       </div>

//       {/* Property Details */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="md:col-span-2">
//           <h2 className="text-2xl font-semibold mb-4">Description</h2>
//           <p className="text-gray-700 mb-8">{property.description}</p>
          
//           <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {property.amenities?.map((amenity, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <span className="text-green-500">✓</span>
//                 <span>{amenity}</span>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="bg-white p-6 rounded-xl shadow-md h-fit sticky top-4">
//           <h2 className="text-2xl font-semibold mb-4">Details</h2>
//           <div className="space-y-4">
//             <div className="flex justify-between">
//               <span className="text-gray-600">Price:</span>
//               <span className="font-semibold">₹{property.rent?.toLocaleString()}/month</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Type:</span>
//               <span>{property.type}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Bedrooms:</span>
//               <span>{property.bedrooms}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Bathrooms:</span>
//               <span>{property.bathrooms}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Available From:</span>
//               <span>{property.availableFrom}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Location:</span>
//               <span>{property.location}</span>
//             </div>
//           </div>
          
//           <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
//             Contact Owner
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;