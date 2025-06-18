// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const PropertyDetails = ({ selectedProperty = [] }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const selectedProperty = location.state?.selectedProperty;

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default PropertyDetails




// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const PropertyDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const selectedProperty = location.state?.selectedProperty;

//   if (!selectedProperty) {
//     return (
//       <div className="p-6 text-center text-red-600">
//         <p>No property selected. Please go back and select a property.</p>
//         <button
//           onClick={() => navigate('/RentalDashBoard')}
//           className="mt-4 px-4 py-2 bg-violet-600 text-white rounded"
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen text-black">
//       <h2 className="text-2xl font-bold mb-4 text-center">{selectedProperty.title}</h2>
//       <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
//         <img
//           src={selectedProperty.images?.[0] || 'https://via.placeholder.com/600x400'}
//           alt="Property"
//           className="w-full h-64 object-cover rounded-xl mb-4"
//         />
//         <p><strong>Location:</strong> {selectedProperty.location}</p>
//         <p><strong>Rent:</strong> ₹{selectedProperty.rent}</p>
//         <p><strong>Available From:</strong> {selectedProperty.availableFrom}</p>
//         <p><strong>Description:</strong> {selectedProperty.description || "No description provided."}</p>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;




// Important Code
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const PropertyDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const selectedProperty = location.state?.selectedProperty;

//   if (!selectedProperty) {
//     return (
//       <div className="p-6 text-center text-red-600">
//         <p>No property selected. Please go back and select a property.</p>
//       </div>
//     );
//   }

//   const {
//     title,
//     description,
//     price,
//     bedrooms,
//     bathrooms,
//     image,
//     latitude,
//     longitude,
//     address,
//   } = selectedProperty;

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = selectedProperty?.images?.length || 1;

//   // Auto-slide every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide(prev => (prev + 1) % totalSlides);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [totalSlides]);

//   if (!selectedProperty) {
//     return (
//       <div className="p-6 text-center text-red-600">
//         <p>No property selected. Please go back and select a property.</p>
//         <button
//           onClick={() => navigate('/RentalDashBoard')}
//           className="mt-4 bg-violet-300 text-violet-900 font-medium px-4 py-1 rounded-lg hover:bg-violet-400"
//         >
//           Back to Listings
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 bg-violet-50 min-h-screen text-black">
//         <div className="mb-4">
//           <button
//             onClick={() => navigate('/RentalDashBoard')}
//             className="bg-violet-300 text-violet-900 font-medium px-4 py-1 rounded-lg hover:bg-violet-400"
//           >
//             Back to Listings
//           </button>
//         </div>
//       <div className="max-w-5xl mx-auto rounded-xl shadow-lg overflow-hidden">
//         {/* Header */}
        

//         {/* Image Carousel */}
//         <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
//           {selectedProperty.images?.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`Slide ${idx}`}
//               className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//                 currentSlide === idx ? 'opacity-100' : 'opacity-0'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Details */}
//         <div className="bg-white p-6 grid md:grid-cols-2 gap-4">
//           {/* Left Side */}
//           <div>
//             <h2 className="text-xl font-bold text-black mb-2">{selectedProperty.title}</h2>
//             <div className="flex flex-wrap gap-6 text-violet-900 mb-4">
//               <p><strong>₹{selectedProperty.rent}/mo</strong></p>
//               <p>🛏️ {selectedProperty.bedrooms} Beds</p>
//               <p>🛁 {selectedProperty.bathrooms} Baths</p>
//               <p>{selectedProperty.furnished ? '🪑 Furnished' : 'Unfurnished'}</p>
//             </div>

//             <h3 className="font-bold text-black">Description</h3>
//             <p className="text-gray-700">{selectedProperty.description}</p>

//             <h3 className="font-bold mt-4 text-black">Amenities</h3>
//             <ul className="flex flex-wrap gap-4 mt-1 text-gray-800">
//               {selectedProperty.amenities?.map((item, index) => (
//                 <li key={index}>✅ {item}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Card */}
//           <div className="bg-violet-100 p-4 rounded-lg">
//             <h3 className="font-bold text-black mb-3">Contact Owner</h3>

//             {/* Owner Info */}
//             <div className="flex items-center gap-3 mb-4">
//                 <div className="w-14 h-14 bg-violet-400 rounded-full flex items-center justify-center text-white text-xl">
//                 👤
//                 </div>
//                 <div>
//                 <p className="font-semibold text-black">{selectedProperty.owner?.name || "Owner Name"}</p>
//                 <p className="text-sm text-black">{selectedProperty.owner?.email || "owner@example.com"}</p>
//                 </div>
//             </div>

//             {/* Contact Info */}
//             <p className="text-black mb-1">📞 {selectedProperty.ownerPhone || "+91 98765 43210"}</p>
//             <p className="text-black mb-4">📧 {selectedProperty.owner?.email || "example@email.com"}</p>

//             {/* Buttons Side by Side */}
//             <div className="flex gap-4">
//                 <button
//                 onClick={() => {
//                     // Logic to add to wishlist
//                     console.log("Added to wishlist");
//                 }}
//                 className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-lg w-full"
//                 >
//                 💜 Add to Wishlist
//                 </button>

//                 <button
//                 onClick={() => {
//                     // Logic to schedule visit
//                     console.log("Schedule Visit clicked");
//                 }}
//                 className="bg-violet-300 hover:bg-violet-400 text-black font-semibold py-2 px-4 rounded-lg w-full"
//                 >
//                 📅 Schedule Visit
//                 </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* 🌍 Map Section */}
//       {/* <div className="rounded-xl overflow-hidden border border-gray-300">
//         <MapContainer center={mapPosition} zoom={13} style={{ height: '400px', width: '100%' }}>
//           <TileLayer
//             attribution='&copy; OpenStreetMap contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={mapPosition}>
//             <Popup>
//               {title} <br /> {address}
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div> */}
//     </div>
//   );
// };

// export default PropertyDetails;



// 2nd Important Code
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { db } from "../../../FirebaseConfig/config";
import BookingModal from './BookingModal/BookingModal';

const PropertyDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedProperty = location.state?.selectedProperty;

  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("loggedinRental"))
    if(userData && userData.user){
      setUser(userData.user)
    }
  }, [])

  // const handleAddToWishlist = async() =>{
  //   if(!user || !user.uid) {
  //     alert("Please log in to add to wishlist.")
  //     return 
  //   }

  //   const wishlistData = {
  //     userId : user.uid || user.email,
  //     userEmail: user.email,
  //     propertyId: selectedProperty.id || selectedProperty.title.replace(/\s/g, "_"),
  //     title: selectedProperty.title,
  //     rent: selectedProperty.rent,
  //     image: selectedProperty.images?.[0],
  //     ownerEmail: selectedProperty.owner?.email || '',
  //     ownerNum: selectedProperty.ownerPhone || '',
  //     addedAt: new Date(),
  //   }
  //   console.log(wishlistData)
  // }

  // const handleAddToWishlist = async () => {
  // if (!user || !user.uid) {
  //   alert("Please log in to add to wishlist.");
  //   return;
  // }

  // const wishlistData = {
  //   propertyId: selectedProperty.id || selectedProperty.title.replace(/\s/g, "_"),
  //   title: selectedProperty.title,
  //   rent: selectedProperty.rent,
  //   image: selectedProperty.images?.[0],
  //   ownerEmail: selectedProperty.owner?.email || '',
  //   ownerNum: selectedProperty.ownerPhone || '',
  //   addedAt: new Date(),
  // };

  // try {
  //   const userRef = doc(db, "Rentals", user.displayName); // Assuming your users are stored under "users" collection with UID as doc ID
    
  //   await updateDoc(userRef, {
  //     wishlist: arrayUnion(wishlistData),
  //   });

  //     alert("Property added to your wishlist!");
  //   } catch (error) {
  //     console.error("Error adding to wishlist: ", error);
  //     alert("Failed to add property to wishlist.");
  //   }
  // };

  const handleAddToWishlist = async () => {
    if (!user || !user.uid) {
      alert("Please log in to add to wishlist.");
      return;
    }

    const wishlistData = {
      propertyId: selectedProperty.id || selectedProperty.title.replace(/\s/g, "_"),
      title: selectedProperty.title,
      rent: selectedProperty.rent,
      image: selectedProperty.images?.[0],
      ownerEmail: selectedProperty.owner?.email || '',
      ownerNum: selectedProperty.ownerPhone || '',
      addedAt: new Date(),
    };

    try {
      const userRef = doc(db, "Rentals", user.displayName);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const existingWishlist = userData.wishlist || [];

        const isAlreadyInWishlist = existingWishlist.some(
          (item) => item.propertyId === wishlistData.propertyId
        );

        if (isAlreadyInWishlist) {
          alert("Property already added to wishlist.");
          return;
        }

        await updateDoc(userRef, {
          wishlist: arrayUnion(wishlistData),
        });

        alert("Property added to your wishlist!");
      } else {
        // If user document doesn't exist, create it with wishlist
        await setDoc(userRef, {
          wishlist: [wishlistData],
        });
        alert("Property added to your wishlist!");
      }
    } catch (error) {
      console.error("Error adding to wishlist: ", error);
      alert("Failed to add property to wishlist.");
    }
  };


  if (!selectedProperty) {
    return (
      <div className="p-6 text-center text-red-600">
        <p>No property selected. Please go back and select a property.</p>
        <button
          onClick={() => navigate('/RentalDashBoard')}
          className="mt-4 bg-violet-300 text-violet-900 font-medium px-4 py-1 rounded-lg hover:bg-violet-400"
        >
          Back to Listings
        </button>
      </div>
    );
  }

  const {
    title,
    description,
    rent,
    bedrooms,
    bathrooms,
    furnishing,
    amenities,
    images,
    owner,
    ownerPhone,
  } = selectedProperty;

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images?.length || 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 2000);
    return () => clearInterval(interval);
  }, [totalSlides]);


  return (
    <div className="p-4 bg-violet-50 min-h-screen text-black">
      <div className="mb-4">
        <button
          onClick={() => navigate('/RentalDashBoard')}
          className="bg-violet-300 text-violet-900 font-medium px-4 py-1 rounded-lg hover:bg-violet-400"
        >
          Back to Listings
        </button>
      </div>

      <div className="max-w-5xl mx-auto rounded-xl shadow-lg overflow-hidden">
        {/* Image Carousel */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          {images?.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                currentSlide === idx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Details */}
        <div className="bg-white p-6 grid md:grid-cols-2 gap-4">
          {/* Left Side */}
          <div>
            <h2 className="text-xl font-bold text-black mb-2">{title}</h2>
            <div className="flex flex-wrap gap-6 text-violet-900 mb-4">
              <p><strong>₹{rent}/mo</strong></p>
              <p>🛏️ {bedrooms} Beds</p>
              <p>🛁 {bathrooms} Baths</p>
              <p>{furnishing ? '🪑 Furnished' : 'Unfurnished'}</p>
            </div>

            <h3 className="font-bold text-black">Description</h3>
            <p className="text-gray-700">{description}</p>

            <h3 className="font-bold mt-4 text-black">Amenities</h3>
            <ul className="flex flex-wrap gap-4 mt-1 text-gray-800">
              {amenities?.map((item, index) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="bg-violet-100 p-4 rounded-lg">
            <h3 className="font-bold text-black mb-3">Contact Owner</h3>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-violet-400 rounded-full flex items-center justify-center text-white text-xl">
                👤
              </div>
              <div>
                <p className="font-semibold text-black">{owner?.name || "Owner Name"}</p>
                <p className="text-sm text-black">{owner?.email || "owner@example.com"}</p>
              </div>
            </div>

            <p className="text-black mb-1">📞 {ownerPhone || "+91 98765 43210"}</p>
            <p className="text-black mb-4">📧 {owner?.email || "example@email.com"}</p>

            <div className="flex gap-4">
              <button
                onClick={handleAddToWishlist}
                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-lg w-full"
              >
                💜 Add to Wishlist
              </button>

              <button
                onClick={() => 
                  // Booking logic placeholder
                  setShowModal(true)
                }
                className="bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded-lg w-full"
              >
                ✅ Book Now
              </button>
              {showModal && (
                <BookingModal
                  user  = {user}
                  property = {selectedProperty}
                  onClose = {() => setShowModal(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;


// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { doc, updateDoc, arrayUnion, getDoc, setDoc } from 'firebase/firestore';
// import { db } from "../../../FirebaseConfig/config";

// const PropertyDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const selectedProperty = location.state?.selectedProperty;
//   // console.log(selectedProperty)
//   // const user = JSON.parse(localStorage.getItem("loggedinRental"))
//   // console.log(user)

//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("loggedinRental"))
//     if(userData && userData.user){
//       setUser(userData.user)
//     }
//   }, [])
//   // console.log(user)

//   const handleAddToWishlist = async () => {
//     if (!user || !user.uid) {
//       alert("Please log in to add to wishlist.");
//       return;
//     }

//     const userDocRef = doc(db, "Rentals", user.uid); // Using UID now ✅

//     const wishlistData = {
//       propertyId: selectedProperty.id || selectedProperty.title.replace(/\s/g, "_"),
//       title: selectedProperty.title,
//       rent: selectedProperty.rent,
//       image: selectedProperty.images?.[0],
//       ownerEmail: selectedProperty.owner?.email || '',
//       ownerNum: selectedProperty.ownerPhone || '',
//       addedAt: new Date(),
//     };

//     try {
//       const docSnap = await getDoc(userDocRef);

//       // if (!docSnap.exists()) {
//       //   alert("User document not found ❌. Please contact admin.");
//       //   return;
//       // }

//       const userData = docSnap.data();
//       // const existingWishlist = userData.myWishlist || [];

//       // const isAlreadyInWishlist = existingWishlist.some(
//       //   (item) => item.propertyId === wishlistData.propertyId
//       // );

//       // if (isAlreadyInWishlist) {
//       //   alert("This property is already in your wishlist!");
//       //   return;
//       // }

//       await updateDoc(userDocRef, {
//         myWishlist: arrayUnion(wishlistData),
//       });

//       alert("Added to wishlist ✅");

//     } catch (error) {
//       console.error("🔥 Firebase Error:", error.code, error.message);
//       alert("Failed to add to wishlist ❌");
//     }
//   };

//   if (!selectedProperty) {
//     return (
//       <div className="p-6 text-center text-red-600">
//         <p>No property selected. Please go back and select a property.</p>
//         <button
//           onClick={() => navigate('/RentalDashBoard')}
//           className="mt-4 bg-violet-300 text-violet-900 font-medium px-4 py-1 rounded-lg hover:bg-violet-400"
//         >
//           Back to Listings
//         </button>
//       </div>
//     );
//   }

//   const {
//     title,
//     description,
//     rent,
//     bedrooms,
//     bathrooms,
//     furnished,
//     amenities,
//     images,
//     owner,
//     ownerPhone,
//   } = selectedProperty;

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = images?.length || 1;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide(prev => (prev + 1) % totalSlides);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [totalSlides]);


//   return (
//     <div className="p-4 bg-violet-50 min-h-screen text-black">
//       <div className="mb-4">
//         <button
//           onClick={() => navigate('/RentalDashBoard')}
//           className="bg-violet-300 text-violet-900 font-medium px-4 py-1 rounded-lg hover:bg-violet-400"
//         >
//           Back to Listings
//         </button>
//       </div>

//       <div className="max-w-5xl mx-auto rounded-xl shadow-lg overflow-hidden">
//         {/* Image Carousel */}
//         <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
//           {images?.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`Slide ${idx}`}
//               className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//                 currentSlide === idx ? 'opacity-100' : 'opacity-0'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Details */}
//         <div className="bg-white p-6 grid md:grid-cols-2 gap-4">
//           {/* Left Side */}
//           <div>
//             <h2 className="text-xl font-bold text-black mb-2">{title}</h2>
//             <div className="flex flex-wrap gap-6 text-violet-900 mb-4">
//               <p><strong>₹{rent}/mo</strong></p>
//               <p>🛏️ {bedrooms} Beds</p>
//               <p>🛁 {bathrooms} Baths</p>
//               <p>{furnished ? '🪑 Furnished' : 'Unfurnished'}</p>
//             </div>

//             <h3 className="font-bold text-black">Description</h3>
//             <p className="text-gray-700">{description}</p>

//             <h3 className="font-bold mt-4 text-black">Amenities</h3>
//             <ul className="flex flex-wrap gap-4 mt-1 text-gray-800">
//               {amenities?.map((item, index) => (
//                 <li key={index}>✅ {item}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Card */}
//           <div className="bg-violet-100 p-4 rounded-lg">
//             <h3 className="font-bold text-black mb-3">Contact Owner</h3>

//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-14 h-14 bg-violet-400 rounded-full flex items-center justify-center text-white text-xl">
//                 👤
//               </div>
//               <div>
//                 <p className="font-semibold text-black">{owner?.name || "Owner Name"}</p>
//                 <p className="text-sm text-black">{owner?.email || "owner@example.com"}</p>
//               </div>
//             </div>

//             <p className="text-black mb-1">📞 {ownerPhone || "+91 98765 43210"}</p>
//             <p className="text-black mb-4">📧 {owner?.email || "example@email.com"}</p>

//             <div className="flex gap-4">
//               <button
//                 onClick={handleAddToWishlist}
//                 className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-lg w-full"
//               >
//                 💜 Add to Wishlist
//               </button>

//               <button
//                 onClick={() => {
//                   // Booking logic placeholder
//                   console.log("Book Now clicked for:", selectedProperty.title);
//                 }}
//                 className="bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded-lg w-full"
//               >
//                 ✅ Book Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;


// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import {
//   FaRupeeSign,
//   FaBed,
//   FaBath,
//   FaHome,
//   FaWifi,
//   FaCar,
//   FaSnowflake,
//   FaShieldAlt,
//   FaPhone,
//   FaEnvelope,
// } from 'react-icons/fa';

// const PropertyDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const selectedProperty = location.state?.selectedProperty;

//   if (!selectedProperty) {
//     return (
//       <div className="p-6 text-center text-red-600">
//         <p>No property selected. Please go back and select a property.</p>
//         <button
//           onClick={() => navigate('/RentalDashBoard')}
//           className="mt-4 px-4 py-2 bg-violet-600 text-white rounded"
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     );
//   }

//   const amenitiesIcons = {
//     "WiFi": <FaWifi />,
//     "Parking": <FaCar />,
//     "AC": <FaSnowflake />,
//     "Security": <FaShieldAlt />,
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 text-black">
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

//         {/* Back Button */}
//         <div className="flex justify-end p-4 bg-violet-100">
//           <button
//             onClick={() => navigate('/RentalDashBoard')}
//             className="bg-violet-300 text-black px-4 py-1 rounded hover:bg-violet-400"
//           >
//             Back to Listings
//           </button>
//         </div>

//         {/* Property Image */}
//         <img
//           src={selectedProperty.images?.[0]}
//           alt="Property"
//           className="w-full h-72 object-cover"
//         />

//         {/* Title, Rent, Beds, Baths */}
//         <div className="p-4 bg-violet-100 text-black">
//           <div className="flex justify-between items-center mb-3">
//             <h2 className="text-2xl font-semibold">{selectedProperty.title}</h2>
//             <p className="text-lg font-bold flex items-center">
//               <FaRupeeSign className="mr-1" />
//               {selectedProperty.rent}/mo
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-6 text-violet-900 font-medium">
//             <span className="flex items-center gap-2"><FaBed /> {selectedProperty.bedrooms} Beds</span>
//             <span className="flex items-center gap-2"><FaBath /> {selectedProperty.bathrooms} Baths</span>
//             <span className="flex items-center gap-2"><FaHome /> {selectedProperty.furnishing}</span>
//           </div>
//         </div>

//         {/* Description & Contact */}
//         <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Description & Amenities */}
//           <div className="md:col-span-2">
//             <h3 className="text-lg font-semibold mb-2">Description</h3>
//             <p className="text-gray-700">{selectedProperty.description}</p>

//             <h3 className="text-lg font-semibold mt-4 mb-2">Amenities</h3>
//             <div className="flex flex-wrap gap-4 text-violet-900 text-base">
//               {selectedProperty.amenities?.map((item, index) => (
//                 <span key={index} className="flex items-center gap-2">
//                   {amenitiesIcons[item] || '•'} {item}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Owner Contact */}
//           <div className="bg-violet-100 rounded-xl p-4">
//             <h3 className="text-lg font-semibold mb-4">Contact Owner</h3>
//             <div className="flex flex-col items-center">
//               <div className="w-16 h-16 bg-violet-300 rounded-full mb-2"></div>
//               <p className="font-medium text-black">{selectedProperty.owner?.name}</p>
//               <p className="flex items-center mt-2 text-sm text-black">
//                 <FaPhone className="mr-2" /> +91 {selectedProperty.ownerPhone}
//               </p>
//               <p className="flex items-center mt-2 text-sm text-black break-all">
//                 <FaEnvelope className="mr-2" /> {selectedProperty.owner?.email}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="p-4 text-right text-sm text-gray-500">
//           Available From: {selectedProperty.availableFrom}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;





// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FaRupeeSign, FaCalendarAlt, FaHeart } from 'react-icons/fa';
// // import { doc } from 'firebase/firestore';
// // import { db } from '../../../FirebaseConfig/config';

// const PropertyDetails = ( {ownersList} ) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const selectedProperty = location.state?.selectedProperty;
//   console.log(ownersList)

//   const [currentImgIndex, setCurrentImgIndex] = useState(0);

// //   const ownerDocRef = doc(db, "Owners");
// //   console.log(ownerDocRef)

//   if (!selectedProperty) {
//     return (
//       <div className="p-6 text-center text-red-600">
//         <p>No property selected. Please go back and select a property.</p>
//         <button
//           onClick={() => navigate('/RentalDashBoard')}
//           className="mt-4 px-4 py-2 bg-violet-600 text-white rounded"
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     );
//   }

//   const images = selectedProperty.images?.length ? selectedProperty.images : ['https://via.placeholder.com/600x400'];

//   const handlePrev = () => {
//     setCurrentImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleNext = () => {
//     setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="p-6 bg-violet-50 min-h-screen">
//       {/* Title & Location */}
//       <div className="text-center mb-6">
//         <h2 className="text-3xl font-bold text-black">{selectedProperty.title}</h2>
//         <p className="text-md text-gray-800">{selectedProperty.location}</p>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
//         {/* Left: Carousel */}
//         <div className="md:w-1/2 relative bg-black flex items-center justify-center">
//           <img
//             src={images[currentImgIndex]}
//             alt="Property"
//             className="w-full h-[400px] object-cover"
//           />
//           {/* Prev & Next Buttons */}
//           {images.length > 1 && (
//             <>
//               <button
//                 onClick={handlePrev}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:bg-gray-200"
//               >
//                 ◀
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:bg-gray-200"
//               >
//                 ▶
//               </button>
//             </>
//           )}
//         </div>

//         {/* Right: Details */}
//         <div className="md:w-1/2 p-6 text-black flex flex-col justify-between">
//           <div>
//             <p className="text-md flex items-center mb-2">
//               <FaRupeeSign className="mr-2" /> <span className="font-semibold">Rent:</span> ₹{selectedProperty.rent}
//             </p>
//             <p className="text-md flex items-center mb-2">
//               <FaCalendarAlt className="mr-2" /> <span className="font-semibold">Available from:</span> {selectedProperty.availableFrom}
//             </p>
//             <div className="mt-4">
//               <p className="text-md font-semibold mb-1">Description:</p>
//               <p className="text-sm text-gray-800">
//                 {selectedProperty.description || 'No description provided.'}
//               </p>
//             </div>
//           </div>

//           <button className="mt-6 w-full bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg flex items-center justify-center">
//             <FaHeart className="mr-2" /> Add to Wishlist
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;



