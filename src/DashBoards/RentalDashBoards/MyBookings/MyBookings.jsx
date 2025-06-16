// import React, { useEffect, useState } from 'react'

// const MyBookings = () => {
//   const [myBookings, setMyBookings] = useState([])
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("loggedinRental"));
//     if (userData && userData.user) {
//       setUser(userData.user);
//     }
//   }, []);

//   useEffect (()=>{
//     fetchMyBookingsData = ()=>{

//     }
//   })
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default MyBookings


// Most Important Code
// import React, { useEffect, useState } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';

// const MyBookings = () => {
//   const [myBookings, setMyBookings] = useState([]);
//   const [user, setUser] = useState({});

//   // Load user from localStorage
//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("loggedinRental"));
//     if (userData && userData.user) {
//       setUser(userData.user);
//     }
//   }, []);

//   // Fetch bookings from Firestore
//   useEffect(() => {
//     const fetchMyBookingsData = async () => {
//       if (!user || !user.displayName) return;

//       try {
//         const userRef = doc(db, "Rentals", user.displayName);
//         const userSnap = await getDoc(userRef);
//         console.log(userSnap)

//         if (userSnap.exists()) {
//           const userData = userSnap.data();
//           setMyBookings(userData.myBookings || []);
//         } else {
//           console.warn("No document found for user:", user.displayName);
//         }
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       }
//     };

//     fetchMyBookingsData();
//   }, [user]);

// //   console.log(myBookings)

//   useEffect(() =>{
//     const fetchStatusData = async () =>{
//         try{
//             const ownerDocRef = doc(db, "Owners", myBookings.ownerName)
//             console.log(ownerDocRef)
//         }
//         catch(error){
//             console.error("Error fetching bookings:", error);
//         }
//     }
//     fetchStatusData()
//   })

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-6 text-center">My Bookings</h2>
//       {myBookings.length === 0 ? (
//         <p className="text-center text-gray-500">You haven’t booked any properties yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {myBookings.map((booking, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 p-4 rounded-2xl shadow-lg bg-white"
//             >
//               <h3 className="font-semibold text-lg mb-2 text-violet-700">{booking.propertyTitle}</h3>
//               <p><strong>Rent:</strong> ₹{booking.rent}</p>
//               <p><strong>Owner:</strong> {booking.ownerName}</p>
//               <p><strong>Email:</strong> {booking.ownerEmail}</p>
//               <p><strong>Phone:</strong> {booking.ownerPhone}</p>
//               <p><strong>Booked At:</strong> {new Date(booking.bookedAt).toLocaleString()}</p>
//               <div className="mt-2">
//                 <span className={`inline-block px-2 py-1 rounded text-white text-xs font-semibold ${
//                   booking.status === "Approved"
//                     ? "bg-green-500"
//                     : booking.status === "Rejected"
//                     ? "bg-red-500"
//                     : "bg-yellow-500"
//                 }`}>
//                   {booking.status || "Pending"}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyBookings;


import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../FirebaseConfig/config';

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
  const [user, setUser] = useState({});

  // Load user from localStorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("loggedinRental"));
    if (userData && userData.user) {
      setUser(userData.user);
    }
  }, []);

  // Fetch user's bookings from Firestore
  useEffect(() => {
    const fetchMyBookingsData = async () => {
      if (!user || !user.displayName) return;

      try {
        const userRef = doc(db, "Rentals", user.displayName);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setMyBookings(userData.myBookings || []);
        } else {
          console.warn("No document found for user:", user.displayName);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchMyBookingsData();
  }, [user]);

  // Fetch updated booking statuses from Owner Firestore
  useEffect(() => {
    const fetchUpdatedStatuses = async () => {
      try {
        const updatedBookings = await Promise.all(
          myBookings.map(async (booking) => {
            const ownerRef = doc(db, "Owners", booking.ownerName);
            const ownerSnap = await getDoc(ownerRef);

            if (ownerSnap.exists()) {
              const ownerData = ownerSnap.data();
              const matchedBooking = (ownerData.bookings || []).find(
                (b) => b.propertyId === booking.propertyId && b.userEmail === booking.userEmail
              );

              return {
                ...booking,
                status: matchedBooking?.status || "Pending"
              };
            } else {
              return {
                ...booking,
                status: "Pending"
              };
            }
          })
        );

        setMyBookings(updatedBookings);
      } catch (error) {
        console.error("Error fetching updated bookings:", error);
      }
    };

    if (myBookings.length > 0) {
      fetchUpdatedStatuses();
    }
  }, [myBookings]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">My Bookings</h2>
      {myBookings.length === 0 ? (
        <p className="text-center text-gray-500">You haven’t booked any properties yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {myBookings.map((booking, index) => (
            <div
              key={index}
              className="border border-gray-200 p-4 rounded-2xl shadow-lg bg-white"
            >
              <h3 className="font-semibold text-lg mb-2 text-black-700">
                {booking.propertyTitle}
              </h3>
              <p><strong>Rent:</strong> ₹{booking.rent}</p>
              <p><strong>Owner:</strong> {booking.ownerName}</p>
              <p><strong>Email:</strong> {booking.ownerEmail}</p>
              <p><strong>Phone:</strong> {booking.ownerPhone}</p>
              <p><strong>Booked At:</strong> {new Date(booking.bookedAt).toLocaleString()}</p>
              <div className="mt-2">
                <span
                  className={`inline-block px-2 py-1 rounded text-white text-xs font-semibold ${
                    booking.status === "Approved"
                      ? "bg-green-500"
                      : booking.status === "Rejected"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {booking.status || "Pending"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;




// import React, { useEffect, useState } from 'react';
// import { doc, onSnapshot } from 'firebase/firestore';
// import { db } from '../../../FirebaseConfig/config';

// const MyBookings = () => {
//   const [myBookings, setMyBookings] = useState([]);
//   const [user, setUser] = useState({});

//   // Load user from localStorage
//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("loggedinRental"));
//     if (userData && userData.user) {
//       setUser(userData.user);
//     }
//   }, []);

//   // Real-time fetch bookings from Firestore
//   useEffect(() => {
//     if (!user || !user.displayName) return;

//     const userRef = doc(db, "Rentals", user.displayName);

//     const unsubscribe = onSnapshot(userRef, (userSnap) => {
//       if (userSnap.exists()) {
//         const userData = userSnap.data();
//         setMyBookings(userData.myBookings || []);
//       } else {
//         console.warn("No document found for user:", user.displayName);
//       }
//     }, (error) => {
//       console.error("Error fetching bookings:", error);
//     });

//     return () => unsubscribe(); // Cleanup on unmount
//   }, [user]);

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-6 text-center">My Bookings</h2>
//       {myBookings.length === 0 ? (
//         <p className="text-center text-gray-500">You haven’t booked any properties yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {myBookings.map((booking, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 p-4 rounded-2xl shadow-lg bg-white"
//             >
//               <h3 className="font-semibold text-lg mb-2 text-violet-700">{booking.propertyTitle}</h3>
//               <p><strong>Rent:</strong> ₹{booking.rent}</p>
//               <p><strong>Owner:</strong> {booking.ownerName}</p>
//               <p><strong>Email:</strong> {booking.ownerEmail}</p>
//               <p><strong>Phone:</strong> {booking.ownerPhone}</p>
//               <p><strong>Booked At:</strong> {new Date(booking.bookedAt).toLocaleString()}</p>
//               <div className="mt-2">
//                 <span className={`inline-block px-2 py-1 rounded text-white text-xs font-semibold ${
//                   booking.status === "Approved"
//                     ? "bg-green-500"
//                     : booking.status === "Rejected"
//                     ? "bg-red-500"
//                     : "bg-yellow-500"
//                 }`}>
//                   {booking.status || "Pending"}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyBookings;
