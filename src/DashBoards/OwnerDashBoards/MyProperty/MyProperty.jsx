// import React, { useEffect, useState } from 'react'
// import { doc,getDoc } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';

// const MyProperty = () => {
//   const loggedinUser = JSON.parse(localStorage.getItem("loggedinOwner"));
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//     const getFetchingData = async()=>{
//       const docRef = doc(db, "Owners", loggedinUser.user.displayName);
//       const getDocRef = await getDoc(docRef);
//       // console.log(getDocRef)

//       if(getDocRef.exists()){
//         const data = getDocRef.data()
//         console.log(data)
//         setProperties(data.properties || []);
//       }
//     }
//     getFetchingData()
//   },[])
//   console.log(properties)

//   if(loading){
//     return <p>Loading....</p>
//   }
//   const handleDelete = async(propertyIndex) => {
  //   try{
  //     const updateProperty = properties.filter((property, index) => index !== propertyIndex);//assuming propertyID is unique field
  //     console.log(updateProperty)
  //     const ownerRef = doc(db, "Owners", loggedinUser.user.displayName)
  //     await updateDoc(ownerRef, {
  //       properties: updateProperty,
  //     })
  //     setProperties(updateProperty);
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  //   alert(`Delete functionality for property at index ${propertyIndex}`);
  //   // You can confirm and remove the property from Firestore here
  // };

//   return (
//     <div>
//       {properties.length > 0 ? <>
//         {properties.map((property, index)=>{
//           return (
//             <div>

//             </div>
//           )
//         })}
//       </>:<>
//         <p>No Property Added Yet</p>
//       </>}
//     </div>
//   )
// }

// export default MyProperty


// import React, { useEffect, useState } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';

// const MyProperty = () => {
//   const loggedinUser = JSON.parse(localStorage.getItem("loggedinOwner"));
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getFetchingData = async () => {
//       try {
//         const docRef = doc(db, "Owners", loggedinUser.user.displayName);
//         const getDocRef = await getDoc(docRef);

//         if (getDocRef.exists()) {
//           const data = getDocRef.data();
//           setProperties(data.properties || []);
//         }
//       } catch (error) {
//         console.error("Error fetching property data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getFetchingData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-violet-50 min-h-screen">
//         {Array.from({ length: 3 }).map((_, idx) => (
//           <div key={idx} className="card w-96 bg-base-100 shadow-xl animate-pulse border border-gray-200">
//             <div className="h-60 bg-gray-200 rounded-t-xl"></div>
//             <div className="card-body space-y-4">
//               <div className="h-6 bg-gray-200 rounded w-3/4"></div>
//               <div className="h-4 bg-gray-200 rounded w-full"></div>
//               <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//               <div className="flex justify-end">
//                 <div className="h-10 bg-gray-300 rounded w-24"></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="bg-violet-50 min-h-screen p-4">
//   {properties.length > 0 ? (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
//       {properties.map((property, index) => (
//         <div key={index} className="card bg-base-100 w-96 shadow-xl border border-violet-100">
//           {/* Carousel */}
//           <div className="carousel w-full h-60 rounded-t-xl">
//             {(property.images && property.images.length > 0) ? (
//               property.images.map((imgUrl, imgIndex) => (
//                 <div key={imgIndex} id={`slide-${index}-${imgIndex}`} className="carousel-item relative w-full">
//                   <img
//                     src={imgUrl}
//                     alt={`Property ${index} - Image ${imgIndex}`}
//                     className="w-full h-60 object-cover rounded-t-xl"
//                   />
//                   <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
//                     <a
//                       href={`#slide-${index}-${(imgIndex - 1 + property.images.length) % property.images.length}`}
//                       className="btn btn-sm btn-circle"
//                     >❮</a>
//                     <a
//                       href={`#slide-${index}-${(imgIndex + 1) % property.images.length}`}
//                       className="btn btn-sm btn-circle"
//                     >❯</a>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <img
//                 src="https://via.placeholder.com/400x250?text=No+Image"
//                 alt="No Image"
//                 className="w-full h-60 object-cover rounded-t-xl"
//               />
//             )}
//           </div>

//           {/* Property Info */}
//           <div className="card-body">
//             <h2 className="card-title text-violet-700">
//               {property.title || "Untitled Property"}
//             </h2>
//             <p className="text-gray-600">
//               {property.description || "No description provided."}
//             </p>
//             <div className="text-sm text-gray-700 mt-2 space-y-1">
//               <p><strong>Location:</strong> {property.location || "N/A"}</p>
//               <p><strong>Rent:</strong> ₹{property.rent || "N/A"}</p>
//               <p><strong>Bedrooms:</strong> {property.bedrooms || "N/A"}</p>
//               <p><strong>Bathrooms:</strong> {property.bathrooms || "N/A"}</p>
//             </div>
            // <div className="card-actions justify-between mt-4">
            //   <button className="btn bg-violet-600 hover:bg-violet-700 text-white border-none">
            //     Edit
            //   </button>
            //   <button className="btn bg-violet-100 hover:bg-violet-200 text-violet-700 border border-violet-300">
            //     Delete
            //   </button>
            // </div>

//           </div>
//         </div>
//       ))}
//     </div>
//   ) : (
//     <p className="text-center text-gray-600 text-lg py-10">
//       No Property Added Yet
//     </p>
//   )}
// </div>

//   );
// };

// export default MyProperty;




// import React, { useEffect, useState } from 'react';
// import { doc, getDoc, updateDoc } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';
// import { ChevronLeft, ChevronRight, Pencil, Trash2 } from 'lucide-react';
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';

// const MyProperty = () => {
//   const loggedinUser = JSON.parse(localStorage.getItem("loggedinOwner"));
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeIndexes, setActiveIndexes] = useState({});

//   useEffect(() => {
//     const getFetchingData = async () => {
//       const docRef = doc(db, "Owners", loggedinUser.user.displayName);
//       const getDocRef = await getDoc(docRef);

//       if (getDocRef.exists()) {
//         const data = getDocRef.data();
//         setProperties(data.properties || []);
//       }
//       setLoading(false);
//     };
//     getFetchingData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndexes((prevIndexes) => {
//         const newIndexes = {};
//         properties.forEach((property, index) => {
//           const images = property.images || [];
//           if (images.length > 1) {
//             const current = prevIndexes[index] || 0;
//             newIndexes[index] = (current + 1) % images.length;
//           }
//         });
//         return { ...prevIndexes, ...newIndexes };
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [properties]);

//   const handleNext = (propertyIndex, totalImages) => {
//     setActiveIndexes((prev) => ({
//       ...prev,
//       [propertyIndex]: (prev[propertyIndex] + 1) % totalImages,
//     }));
//   };

//   const handlePrev = (propertyIndex, totalImages) => {
//     setActiveIndexes((prev) => ({
//       ...prev,
//       [propertyIndex]: (prev[propertyIndex] - 1 + totalImages) % totalImages,
//     }));
//   };

//   const handleEdit = (propertyIndex) => {
//     alert(`Edit functionality for property at index ${propertyIndex}`);
//     // You can integrate modal/edit page navigation here
//   };

//   const handleDelete = async (propertyIndex) => {
//     const confirm = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'This property will be permanently removed!',
//       icon: 'warning',
//       iconColor: '#7c3aed', // Tailwind Violet-600
//       background: '#f5f3ff', // Tailwind Violet-50
//       color: '#4c1d95',      // Tailwind Violet-900
//       showCancelButton: true,
//       confirmButtonColor: '#ede9fe', // Tailwind Violet-100
//       cancelButtonColor: '#ddd6fe',  // Tailwind Violet-200
//       confirmButtonText: '<span style="color:#4c1d95;">Yes, delete it!</span>',
//       cancelButtonText: '<span style="color:#6b21a8;">Cancel</span>',
//     });


//     if (confirm.isConfirmed) {
//       try {
//         const updatedProperties = properties.filter((_, index) => index !== propertyIndex);

//         const ownerRef = doc(db, "Owners", loggedinUser.user.displayName);
//         await updateDoc(ownerRef, {
//           properties: updatedProperties,
//         });

//         setProperties(updatedProperties);

//         Swal.fire({
//           title: 'Deleted!',
//           text: `Property at index ${propertyIndex} has been deleted.`,
//           icon: 'success',
//           iconColor: '#7c3aed',
//           background: '#f5f3ff',
//           color: '#4c1d95',
//           timer: 1000,
//           showConfirmButton: false,
//           timerProgressBar: true,
//         });
//       } catch (error) {
//         console.error(error);
//         Swal.fire({
//           title: 'Error!',
//           text: 'Something went wrong while deleting.',
//           icon: 'error',
//           iconColor: '#dc2626',
//           background: '#fef2f2',
//           color: '#7f1d1d',
//         });
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center mt-12 h-screen">
//         <div className="w-12 h-12 border-4 border-violet-500 border-dashed rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-violet-50 min-h-screen p-6">
//       {properties.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {properties.map((property, index) => {
//             const images = property.images || [];
//             const activeImageIndex = activeIndexes[index] || 0;

//             return (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-2xl border border-violet-200 overflow-hidden"
//               >
//                 {/* Image Carousel */}
//                 <div className="relative h-64">
//                   {images.length > 0 ? (
//                     <>
//                       <img
//                         src={images[activeImageIndex]}
//                         alt={`Slide ${activeImageIndex + 1}`}
//                         className="object-cover w-full h-full transition-all duration-500"
//                       />

//                       {images.length > 1 && (
//                         <>
//                           <button
//                             onClick={() => handlePrev(index, images.length)}
//                             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-violet-600 rounded-full p-1 shadow"
//                           >
//                             <ChevronLeft size={20} />
//                           </button>
//                           <button
//                             onClick={() => handleNext(index, images.length)}
//                             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-violet-600 rounded-full p-1 shadow"
//                           >
//                             <ChevronRight size={20} />
//                           </button>
//                         </>
//                       )}
//                     </>
//                   ) : (
//                     <div className="bg-gray-100 flex items-center justify-center h-full text-gray-400">
//                       No Image
//                     </div>
//                   )}
//                 </div>

//                 {/* Property Details */}
//                 <div className="p-4 space-y-2">
//                   <h2 className="text-lg font-semibold text-violet-800">{property.title}</h2>
//                   <p className="text-sm text-gray-600">{property.location}</p>
//                   <p className="text-sm text-gray-500">
//                     ₹{property.rent} / month • {property.bedrooms} BHK • {property.bathrooms} Bath
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     Available from: {property.availableFrom}
//                   </p>
//                 </div>

//                 {/* Edit / Delete Buttons */}
//                 <div className="card-actions justify-between mt-4 px-4 pb-4">
//                   <button
//                     onClick={() => handleEdit(index)}
//                     className="btn bg-violet-600 hover:bg-violet-700 text-white border-none"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="btn bg-violet-100 hover:bg-violet-200 text-violet-700 border border-violet-300"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-center text-gray-600 text-lg">No Property Added Yet</p>
//       )}
//     </div>
//   );
// };

// export default MyProperty;



import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../FirebaseConfig/config';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const MyProperty = () => {
  const loggedinUser = JSON.parse(localStorage.getItem("loggedinOwner"));
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndexes, setActiveIndexes] = useState({});

  useEffect(() => {
    const getFetchingData = async () => {
      const docRef = doc(db, "Owners", loggedinUser.user.displayName);
      const getDocRef = await getDoc(docRef);

      if (getDocRef.exists()) {
        const data = getDocRef.data();
        setProperties(data.properties || []);
      }
      setLoading(false);
    };
    getFetchingData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes((prevIndexes) => {
        const newIndexes = {};
        properties.forEach((property, index) => {
          const images = property.images || [];
          if (images.length > 1) {
            const current = prevIndexes[index] || 0;
            newIndexes[index] = (current + 1) % images.length;
          }
        });
        return { ...prevIndexes, ...newIndexes };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [properties]);

  const handleNext = (propertyIndex, totalImages) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [propertyIndex]: (prev[propertyIndex] + 1) % totalImages,
    }));
  };

  const handlePrev = (propertyIndex, totalImages) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [propertyIndex]: (prev[propertyIndex] - 1 + totalImages) % totalImages,
    }));
  };

  const handleEdit = (propertyIndex) => {
    alert(`Edit functionality for property at index ${propertyIndex}`);
  };

  const handleDelete = async (propertyIndex) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'This property will be permanently removed!',
      icon: 'warning',
      iconColor: '#7c3aed',
      background: '#f5f3ff',
      color: '#000',
      showCancelButton: true,
      confirmButtonColor: '#ede9fe',
      cancelButtonColor: '#ddd6fe',
      confirmButtonText: '<span style="color:#000;">Yes, delete it!</span>',
      cancelButtonText: '<span style="color:#000;">Cancel</span>',
    });

    if (confirm.isConfirmed) {
      try {
        const updatedProperties = properties.filter((_, index) => index !== propertyIndex);
        const ownerRef = doc(db, "Owners", loggedinUser.user.displayName);
        await updateDoc(ownerRef, { properties: updatedProperties });
        setProperties(updatedProperties);

        Swal.fire({
          title: 'Deleted!',
          text: `Property at index ${propertyIndex} has been deleted.`,
          icon: 'success',
          iconColor: '#7c3aed',
          background: '#f5f3ff',
          color: '#000',
          timer: 1000,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong while deleting.',
          icon: 'error',
          iconColor: '#dc2626',
          background: '#fef2f2',
          color: '#000',
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center mt-12 h-screen">
        <div className="w-12 h-12 border-4 border-violet-600 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen p-6">
      {properties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => {
            const images = property.images || [];
            const activeImageIndex = activeIndexes[index] || 0;

            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl border border-gray-300 overflow-hidden"
              >
                {/* Image Carousel */}
                <div className="relative h-64">
                  {images.length > 0 ? (
                    <>
                      <img
                        src={images[activeImageIndex]}
                        alt={`Slide ${activeImageIndex + 1}`}
                        className="object-cover w-full h-full transition-all duration-500"
                      />

                      {images.length > 1 && (
                        <>
                          <button
                            onClick={() => handlePrev(index, images.length)}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-1 shadow"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={() => handleNext(index, images.length)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-1 shadow"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="bg-gray-100 flex items-center justify-center h-full text-black">
                      No Image
                    </div>
                  )}
                </div>

                {/* Property Details */}
                <div className="p-4 space-y-2">
                  <h2 className="text-lg font-semibold text-black">{property.title}</h2>
                  <p className="text-sm text-black">{property.location}</p>
                  <p className="text-sm text-black">
                    ₹{property.rent} / month • {property.bedrooms} BHK • {property.bathrooms} Bath
                  </p>
                  <p className="text-xs text-black">
                    Available from: {property.availableFrom}
                  </p>
                </div>

                {/* Edit / Delete Buttons */}
                <div className="card-actions justify-between mt-4 px-4 pb-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn bg-violet-600 hover:bg-violet-700 text-white border-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn bg-white hover:bg-gray-100 text-black border border-gray-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-black text-lg">No Property Added Yet</p>
      )}
    </div>
  );
};

export default MyProperty;
