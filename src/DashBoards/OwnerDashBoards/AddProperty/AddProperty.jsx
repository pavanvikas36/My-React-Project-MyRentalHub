// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
// import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';
// import { uploadToCloudinary } from '../../../utils/cloudinaryUpload';

// const AddProperty = () => {
//   const loggedinUser = JSON.parse(localStorage.getItem("loggedinOwner"))  
//   const [propertyDetails, setPropertyDetails] = useState({
//     title: '',
//     type: '',
//     location: '',
//     description: '',
//     bedrooms: '',
//     bathrooms: '',
//     rent: '',
//     availableFrom: '',
//     images: [],
//     amenities: [], // Ensure this is always an array
//     furnishing: '',
//   });

//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpenModal = () => setIsOpen(true);
//   const handleCloseModal = () => setIsOpen(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a clean copy of propertyDetails with ensured array types
//     const submissionData = {
//       ...propertyDetails,
//       amenities: Array.isArray(propertyDetails.amenities) 
//         ? propertyDetails.amenities 
//         : [propertyDetails.amenities]
//     };

//     const ownerDocRef = doc(db, "Owners", loggedinUser.user.displayName);
    
//     try {
//       await updateDoc(ownerDocRef, {
//         properties: arrayUnion(submissionData)
//       });

//       Swal.fire({
//         title: 'Property Submitted!',
//         text: 'Property Submitted Successfully!',
//         icon: 'success',
//         iconColor: '#8b5cf6',
//         background: '#f5f3ff',
//         color: '#4c1d95',
//         timer: 2500,
//         timerProgressBar: true,
//         showConfirmButton: false,
//       });

//       setIsOpen(false);
//     } catch (error) {
//       console.error("Error submitting property:", error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'Failed to submit property',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   const handleImageChange = async(e) => {
//     const files = [...e.target.files];
//     const urls = [];

//     for (const file of files){
//       const url = await uploadToCloudinary(file)
//       urls.push(url)
//     }
//     setPropertyDetails((prev)=>({
//       ...prev, images:urls,
//     }));
//   };

//   const handleAmenityChange = (e) => {
//     const { value, checked } = e.target;
    
//     setPropertyDetails(prev => ({
//       ...prev,
//       amenities: checked
//         ? [...prev.amenities, String(value)] // Explicit string conversion
//         : prev.amenities.filter(a => a !== value)
//     }));
//   };

//   const handleFurnishingChange = (e) => {
//     setPropertyDetails({ ...propertyDetails, furnishing: e.target.value });
//   };

//   // console.log("Amenities before submit:", JSON.stringify(propertyDetails.amenities));

//   return (
//     <>
//       <div className="h-[500px] flex items-center justify-center bg-violet-50">
//         <button
//           onClick={handleOpenModal}
//           className="btn bg-violet-600 text-white hover:bg-violet-700 text-lg px-6 py-3 rounded-lg shadow"
//         >
//           + Add Property
//         </button>
//       </div>

//       {isOpen && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
//           <div className="animate-fadeInScale bg-white w-full max-w-2xl md:max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6 space-y-4 transition-transform duration-300">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-semibold text-violet-700">🏠 Add New Property</h2>
//               <button onClick={handleCloseModal} className="text-gray-500 hover:text-red-600 font-bold text-2xl">×</button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Property Title"
//                 required
//                 className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 onChange={(e) => setPropertyDetails({ ...propertyDetails, title: e.target.value })}
//               />

//               <select
//                 required
//                 className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 onChange={(e) => setPropertyDetails({ ...propertyDetails, type: e.target.value })}
//               >
//                 <option value="">Select Property Type</option>
//                 <option>Apartment</option>
//                 <option>House</option>
//                 <option>PG</option>
//                 <option>Studio</option>
//               </select>

//               <input
//                 type="text"
//                 placeholder="Location (e.g. Hitech City)"
//                 required
//                 className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 onChange={(e) => setPropertyDetails({ ...propertyDetails, location: e.target.value })}
//               />

//               <textarea
//                 placeholder="Property Description"
//                 required
//                 className="w-full border p-3 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 onChange={(e) => setPropertyDetails({ ...propertyDetails, description: e.target.value })}
//               />

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="number"
//                   min="0"
//                   placeholder="Bedrooms"
//                   className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-violet-500"
//                   onChange={(e) => setPropertyDetails({ ...propertyDetails, bedrooms: e.target.value })}
//                 />
//                 <input
//                   type="number"
//                   min="0"
//                   placeholder="Bathrooms"
//                   className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-violet-500"
//                   onChange={(e) => setPropertyDetails({ ...propertyDetails, bathrooms: e.target.value })}
//                 />
//               </div>

//               <input
//                 type="number"
//                 placeholder="Rent Amount ₹"
//                 required
//                 className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 onChange={(e) => setPropertyDetails({ ...propertyDetails, rent: e.target.value })}
//               />

//               <input
//                 type="date"
//                 required
//                 className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 onChange={(e) => setPropertyDetails({ ...propertyDetails, availableFrom: e.target.value })}
//               />

//               <div>
//                 <label className="block mb-1 font-medium text-gray-700">Upload Images</label>
//                 <input
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   className="w-full border p-2 rounded"
//                   onChange={handleImageChange}
//                 />
//                 {propertyDetails.images.length > 0 && (
//                   <div className='grid grid-cols-2 gap-2 mt-2'>
//                     {propertyDetails.images.map((img, idx)=>{
//                       return <img key={idx} src={img} alt={`Property-${idx}`} className="w-full h-32 object-cover rounded border" />
//                     })}
//                   </div>
//                 )}
//               </div>

//               <div className="space-y-2">
//                 <label className="font-medium text-gray-700">Amenities</label>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//                   {["WiFi", "Parking", "AC", "Power Backup", "Lift", "Security"].map((item, index) => (
//                     <label key={index} className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         value={item}
//                         checked={propertyDetails.amenities.includes(item)}
//                         onChange={handleAmenityChange}
//                         className="accent-violet-600"
//                       /> 
//                       {item}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="mt-2">
//                 <label className="font-medium block mb-1 text-gray-700">Furnishing</label>
//                 <div className="flex flex-wrap gap-4">
//                   {["Furnished", "Semi-furnished", "Unfurnished"].map((option) => (
//                     <label key={option}>
//                       <input
//                         type="radio"
//                         name="furnishing"
//                         value={option}
//                         className="accent-violet-600"
//                         onChange={handleFurnishingChange}
//                       />{' '}
//                       {option}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex justify-end gap-4 pt-4">
//                 <button
//                   type="button"
//                   onClick={handleCloseModal}
//                   className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-6 rounded"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default AddProperty;


import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../../FirebaseConfig/config';
import { uploadToCloudinary } from '../../../utils/cloudinaryUpload';

const AddProperty = () => {
  const loggedinUser = JSON.parse(localStorage.getItem("loggedinOwner"));

  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    type: '',
    location: '',
    description: '',
    bedrooms: '',
    bathrooms: '',
    rent: '',
    availableFrom: '',
    images: [],
    amenities: [],
    furnishing: '',
    ownerPhone: '',
  });


  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
      ...propertyDetails,
      amenities: Array.isArray(propertyDetails.amenities)
        ? propertyDetails.amenities
        : [propertyDetails.amenities],
    };
    console.log("Submitting property details:", submissionData);

    const ownerDocRef = doc(db, "Owners", loggedinUser.user.displayName);

    try {
      await updateDoc(ownerDocRef, {
        properties: arrayUnion(submissionData),
      });

      Swal.fire({
        title: 'Property Submitted!',
        text: 'Property Submitted Successfully!',
        icon: 'success',
        iconColor: '#8b5cf6',
        background: '#f5f3ff',
        color: '#4c1d95',
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      setIsOpen(false);
      setPropertyDetails({
        title: '',
        type: '',
        location: '',
        description: '',
        bedrooms: '',
        bathrooms: '',
        rent: '',
        availableFrom: '',
        images: [],
        amenities: [],
        furnishing: '',
      });
    } catch (error) {
      console.error("Error submitting property:", error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to submit property',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleImageChange = async (e) => {
    const files = [...e.target.files];
    const urls = [];

    for (const file of files) {
      const url = await uploadToCloudinary(file);
      console.log("Uploaded image URL:", url);
      urls.push(url);
    }

    setPropertyDetails((prev) => ({
      ...prev,
      images: urls,
    }));
  };

  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;

    setPropertyDetails((prev) => ({
      ...prev,
      amenities: checked
        ? [...prev.amenities, String(value)]
        : prev.amenities.filter((a) => a !== value),
    }));
  };

  const handleFurnishingChange = (e) => {
    setPropertyDetails({ ...propertyDetails, furnishing: e.target.value });
  };

  return (
    <>
      <div className="h-[500px] flex items-center justify-center bg-violet-50">
        <button
          onClick={handleOpenModal}
          className="btn bg-violet-600 text-white hover:bg-violet-700 text-lg px-6 py-3 rounded-lg shadow"
        >
          + Add Property
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="animate-fadeInScale bg-white w-full max-w-2xl md:max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6 space-y-4 transition-transform duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-violet-700">
                🏠 Add New Property
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-red-600 font-bold text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Property Title"
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                onChange={(e) =>
                  setPropertyDetails({ ...propertyDetails, title: e.target.value })
                }
              />

              <select
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                onChange={(e) =>
                  setPropertyDetails({ ...propertyDetails, type: e.target.value })
                }
              >
                <option value="">Select Property Type</option>
                <option>Apartment</option>
                <option>House</option>
                <option>PG</option>
                <option>Studio</option>
              </select>

              <input
                type="text"
                placeholder="Location (e.g. Hitech City)"
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                onChange={(e) =>
                  setPropertyDetails({ ...propertyDetails, location: e.target.value })
                }
              />

              <textarea
                placeholder="Property Description"
                required
                className="w-full border p-3 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
                onChange={(e) =>
                  setPropertyDetails({ ...propertyDetails, description: e.target.value })
                }
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="number"
                  min="0"
                  placeholder="Bedrooms"
                  className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-violet-500"
                  onChange={(e) =>
                    setPropertyDetails({ ...propertyDetails, bedrooms: e.target.value })
                  }
                />
                <input
                  type="number"
                  min="0"
                  placeholder="Bathrooms"
                  className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-violet-500"
                  onChange={(e) =>
                    setPropertyDetails({ ...propertyDetails, bathrooms: e.target.value })
                  }
                />
              </div>

              <input
                type="number"
                placeholder="Rent Amount ₹"
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                onChange={(e) =>
                  setPropertyDetails({ ...propertyDetails, rent: e.target.value })
                }
              />

              <input
                type="tel"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                onChange={(e) => setPropertyDetails({ ...propertyDetails, ownerPhone: e.target.value })}
              />

              <input
                type="date"
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                onChange={(e) =>
                  setPropertyDetails({ ...propertyDetails, availableFrom: e.target.value })
                }
              />

              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Upload Images
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="w-full border p-2 rounded"
                  onChange={handleImageChange}
                />
                {propertyDetails.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {propertyDetails.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Property-${idx}`}
                        className="w-full h-32 object-cover rounded border"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="font-medium text-gray-700">Amenities</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {["Borewell Water", "Parking", "CCTV", "Power Backup", "Lift", "Security"].map(
                    (item, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={item}
                          checked={propertyDetails.amenities.includes(item)}
                          onChange={handleAmenityChange}
                          className="accent-violet-600"
                        />
                        {item}
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="mt-2">
                <label className="font-medium block mb-1 text-gray-700">Furnishing</label>
                <div className="flex flex-wrap gap-4">
                  {["Furnished", "Semi-furnished", "Unfurnished"].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="furnishing"
                        value={option}
                        className="accent-violet-600"
                        onChange={handleFurnishingChange}
                      />{" "}
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-6 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProperty;
