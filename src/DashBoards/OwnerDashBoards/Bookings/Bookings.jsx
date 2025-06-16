// import { doc, getDoc } from 'firebase/firestore'
// import React, { useEffect, useState } from 'react'
// import { db } from '../../../FirebaseConfig/config'

// const Bookings = () => {
//   const [bookings, setBookings] = useState([])

//   const loggedinUser = JSON.parse(localStorage.getItem("loggedinOwner"));
  
//   useEffect(() => {
//     const fetchBookingsData = async ()=>{
//         const ownerDocRef = doc(db, "Owners", loggedinUser.user.displayName)
//         const getOwnerDocRef = await getDoc(ownerDocRef)
//         // console.log(getOwnerDocRef)

//         if (getOwnerDocRef.exists()) {
//             const data = getOwnerDocRef.data();
//             console.log("Bookings:", data.bookings || []);
//         }
//     }
//   })
//   return (
//     <div>
//       Bookings
//     </div>
//   )
// }

// export default Bookings


// import { doc, getDoc } from 'firebase/firestore'
// import React, { useEffect, useState } from 'react'
// import { db } from '../../../FirebaseConfig/config'

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);

//   const loggedinUser = JSON.parse(localStorage.getItem("loggedinOwner"));

//   useEffect(() => {
//     const fetchBookingsData = async () => {
//       try {
//         const ownerDocRef = doc(db, "Owners", loggedinUser.user.displayName);
//         const getOwnerDocRef = await getDoc(ownerDocRef);

//         if (getOwnerDocRef.exists()) {
//           const data = getOwnerDocRef.data();
//           console.log("Bookings:", data.bookings || []);
//           setBookings(data.bookings || []);
//         } else {
//           console.warn("Owner document not found.");
//         }
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       }
//     };

//     fetchBookingsData(); // ✅ You missed this!
//   }, [loggedinUser.user.displayName]); // ✅ Add dependency

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>No bookings available.</p>
//       ) : (
//         <ul className="space-y-4">
//           {bookings.map((booking, index) => (
//             <li
//               key={index}
//               className="border border-gray-300 p-4 rounded-lg shadow-md"
//             >
//               <p><strong>Property:</strong> {booking.propertyTitle}</p>
//               <p><strong>Rent:</strong> ₹{booking.rent}</p>
//               <p><strong>Booked By:</strong> {booking.bookedBy}</p>
//               <p><strong>Email:</strong> {booking.userEmail}</p>
//               <p><strong>Phone:</strong> {booking.phone}</p>
//               <p><strong>Booked At:</strong> {new Date(booking.bookedAt).toLocaleString()}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Bookings;



import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../FirebaseConfig/config';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const loggedinUser = JSON.parse(localStorage.getItem("loggedinOwner"));

  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const ownerDocRef = doc(db, "Owners", loggedinUser.user.displayName);
        const getOwnerDocRef = await getDoc(ownerDocRef);

        if (getOwnerDocRef.exists()) {
          const data = getOwnerDocRef.data();
          setBookings(data.bookings || []);
        } else {
          console.warn("Owner document not found.");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookingsData();
  }, [loggedinUser.user.displayName]);

  const handleStatusChange = async (index, newStatus) => {
    try {
      const updatedBookings = [...bookings];
      updatedBookings[index].status = newStatus;
      setBookings(updatedBookings);

      const ownerDocRef = doc(db, "Owners", loggedinUser.user.displayName);
      await updateDoc(ownerDocRef, {
        bookings: updatedBookings
      });

      alert("✅ Booking status updated.");
    } catch (error) {
      console.error("Error updating status:", error);
      alert("⚠️ Failed to update status.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="border border-gray-200 p-4 rounded-2xl shadow-lg bg-white"
            >
              <h3 className="font-semibold text-lg mb-2 text-black-700">{booking.propertyTitle}</h3>
              <p><strong>Rent:</strong> ₹{booking.rent}</p>
              <p><strong>Booked By:</strong> {booking.bookedBy}</p>
              <p><strong>Email:</strong> {booking.userEmail}</p>
              <p><strong>Phone:</strong> {booking.phone}</p>
              <p><strong>Booked At:</strong> {new Date(booking.bookedAt).toLocaleString()}</p>

              {/* Status Badge */}
              <div className="mt-2">
                <span className={`inline-block px-2 py-1 rounded text-white text-xs font-semibold ${
                  booking.status === "Approved"
                    ? "bg-green-500"
                    : booking.status === "Rejected"
                    ? "bg-red-500"
                    : "bg-yellow-500"
                }`}>
                  {booking.status || "Pending"}
                </span>
              </div>

              {/* Dropdown to Change Status */}
              <div className="mt-3">
                <label className="text-sm font-medium text-gray-600 mr-2">
                  Change Status:
                </label>
                <select
                  value={booking.status || "Pending"}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                  className="mt-1 border border-gray-300 rounded px-2 py-1 text-sm w-full"
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
