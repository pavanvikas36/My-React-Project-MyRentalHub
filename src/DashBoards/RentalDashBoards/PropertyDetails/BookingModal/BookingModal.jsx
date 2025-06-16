// import React from 'react';

// const BookingModal = ({ user, property, onClose }) => {
//   console.log(property)
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4">Confirm Booking</h2>
//         <p className="mb-2">Property: <strong>{property.title}</strong></p>
//         <p className="mb-2">Rent: ₹{property.rent}</p>
//         <p className="mb-4">Booked By: <strong>{user.displayName}</strong></p>
//         <p className="mb-4">Booked Email: <strong>{user.email}</strong></p>

//         <div className="flex justify-end gap-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={() => {
//               // Perform booking action
//               alert("Booking confirmed!");
//               onClose();
//             }}
//             className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;


// import React, { useState } from 'react';

// const BookingModal = ({ user, property, onClose }) => {
//   console.log(user)  
//   const [phone, setPhone] = useState(user.phoneNumber || '');

//   const handleConfirm = () => {
//     if (!phone.trim()) {
//       alert("Please enter your phone number before confirming.");
//       return;
//     }

//     // Replace with actual booking logic
//     console.log("Booking confirmed with phone:", phone);
//     alert("Booking confirmed!");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4">Confirm Booking</h2>

//         <p className="mb-2">Property: <strong>{property.title}</strong></p>
//         <p className="mb-2">Rent: ₹{property.rent}</p>
//         <p className="mb-2">Booked By: <strong>{user.displayName}</strong></p>
//         <p className="mb-2">Booked Email: <strong>{user.email}</strong></p>

//         {/* Phone number input */}
//         <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">
//           Phone Number:
//         </label>
//         <input
//           type="tel"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           placeholder="Enter your phone number"
//           className="w-full px-3 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-violet-400"
//         />

//         <div className="flex justify-end gap-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleConfirm}
//             className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;




import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { db } from '../../../../FirebaseConfig/config';

const BookingModal = ({ user, property, onClose }) => {
  console.log(property)
  const [phone, setPhone] = useState(user?.phoneNumber || '');

  useEffect(() => {
    if (!user || !user.email || !user.displayName) {
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'Please log in to book this property.',
        confirmButtonColor: '#8b5cf6'
      }).then(() => {
        onClose();
      });
    }
  }, [user, onClose]);

  const handleConfirm = async() => {
    if (!phone.trim()) {
      Swal.fire({
        icon: 'info',
        title: 'Missing Phone Number',
        text: 'Please enter your phone number before confirming.',
        confirmButtonColor: '#8b5cf6'
      });
      return;
    }

    // Perform booking logic here
    console.log("Booking confirmed with phone:", phone);
    Swal.fire({
      icon: 'success',
      title: 'Booking Confirmed!',
      text: 'Your booking has been successfully submitted.',
      confirmButtonColor: '#22c55e'
    }).then(() => {
      onClose();
    });

    const bookingData = {
        propertyId: property.id || property.title.replace(/\s/g, "_"),
        propertyTitle: property.title,
        rent: property.rent,
        bookedBy: user.displayName,
        userEmail: user.email,
        phone: phone,
        bookedAt: new Date().toISOString(),
        ownerName: property.owner.name,
        ownerEmail: property.owner.email,
        ownerPhone: property.ownerPhone,
    };
    console.log(bookingData)

    try{
        const ownerName = property.owner?.name;
        // console.log(ownerName)
        if(!ownerName){
            throw new Error("Owner email not available.");
        }

        const ownerDocRef = doc(db, "Owners", ownerName)
        const ownerSnap = await getDoc(ownerDocRef)
        console.log(ownerSnap)

        if(ownerSnap.exists()){
            await updateDoc(ownerDocRef, {
                bookings: arrayUnion(bookingData)
            })
        }else{
            alert("Owner Document Not Present")
        }
        Swal.fire({
            icon: 'success',
            title: 'Booking Confirmed!',
            text: 'Details have been sent to the owner.',
        }).then(() => {
            onClose();
        });

        // 🔄 Send to user's Rentals document as `myBookings`
        const userRentalDocRef = doc(db, "Rentals", user.displayName);
        const userRentalSnap = await getDoc(userRentalDocRef);

        if(userRentalSnap.exists()){
            await updateDoc(userRentalDocRef, {
                myBookings: arrayUnion(bookingData)
            })
        }else{
            alert("Rental Document Not Present")
        }
    }
    catch(error){
        console.error("Error sending booking to owner:", error);
        Swal.fire({
            icon: 'error',
            title: 'Booking Failed',
            text: 'Could not send booking details to the owner.',
        });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Confirm Booking</h2>

        <p className="mb-2">Property: <strong>{property.title}</strong></p>
        <p className="mb-2">Rent: ₹{property.rent}</p>
        <p className="mb-2">Booked By: <strong>{user.displayName}</strong></p>
        <p className="mb-2">Booked Email: <strong>{user.email}</strong></p>

        {/* Phone number input */}
        <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">
          Phone Number:
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full px-3 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-violet-400"
        />

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
