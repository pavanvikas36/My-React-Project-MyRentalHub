// import React from 'react';
// import { XMarkIcon, UserCircleIcon, MapPinIcon } from '@heroicons/react/24/outline';

// const ProfileModal = ({ user, isOpen, onClose }) => {
//   const loggedinOwner = JSON.parse(localStorage.getItem("loggedinOwner"))
//   const loggedinRental = JSON.parse(localStorage.getItem("loggedinRental"))  
//   console.log(user)  
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
//       <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
//         >
//           <XMarkIcon className="w-6 h-6" />
//         </button>

//         {/* Profile Icon */}
//         <div className="flex flex-col items-center text-center space-y-3">
//           <UserCircleIcon className="w-16 h-16 text-violet-600" />

//           <h2 className="text-xl font-semibold flex items-center gap-2">
//             {/* <MapPinIcon className="w-5 h-5 text-violet-500" /> */}
//             {user?.displayName || "User Name"}
//           </h2>

//           <p className="text-gray-600">{user?.email || "user@example.com"}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileModal;


// import React from 'react';
// import { XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';

// const ProfileModal = ({ user, isOpen, onClose }) => {
//   if (!isOpen) return null;

//   // Use the user's profile image if available, otherwise fallback to icon
//   const profileImage = user?.photoURL || user?.profileImage || null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
//       <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
//         >
//           <XMarkIcon className="w-6 h-6" />
//         </button>

//         {/* Profile Section */}
//         <div className="flex flex-col items-center text-center space-y-3">
//           {profileImage ? (
//             <img
//               src={profileImage}
//               alt="Profile"
//               className="w-20 h-20 rounded-full object-cover border-4 border-violet-500 shadow"
//             />
//           ) : (
//             <UserCircleIcon className="w-20 h-20 text-violet-600" />
//           )}

//           <h2 className="text-xl font-semibold">
//             {user?.displayName || "User Name"}
//           </h2>

//           <p className="text-gray-600">{user?.email || "user@example.com"}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileModal;


// import React, { useState } from 'react';
// import { XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
// import { doc, updateDoc } from 'firebase/firestore';
// import { db } from '../../FirebaseConfig/config';

// const ProfileModal = ({ user, isOpen, onClose }) => {
//   const [uploading, setUploading] = useState(false);
//   const [imageUrl, setImageUrl] = useState(user?.photoURL || user?.profileImage || '');

//   if (!isOpen) return null;

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'qpt9twrk');

//     try {
//       const res = await fetch(`https://api.cloudinary.com/v1_1/dtcam6kvz/image/upload`, {
//         method: 'POST',
//         body: formData
//       });
//       const data = await res.json();
//       const imageUrl = data.secure_url;
//       setImageUrl(imageUrl);

//       // 🔄 Update Firestore
//       const userRef = doc(db, 'Rentals', user.displayName);
//       await updateDoc(userRef, { profileImage: imageUrl });

//       // 🔄 Update LocalStorage
//       const localData = JSON.parse(localStorage.getItem('loggedinRental'));
//       if (localData && localData.user) {
//         localData.user.profileImage = imageUrl;
//         localStorage.setItem('loggedinRental', JSON.stringify(localData));
//       }

//       alert('Profile image updated ✅');
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Upload failed ❌');
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
//       <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
//         >
//           <XMarkIcon className="w-6 h-6" />
//         </button>

//         {/* Profile Section */}
//         <div className="flex flex-col items-center text-center space-y-3">
//           {imageUrl ? (
//             <img
//               src={imageUrl}
//               alt="Profile"
//               className="w-20 h-20 rounded-full object-cover border-4 border-violet-500 shadow"
//             />
//           ) : (
//             <UserCircleIcon className="w-20 h-20 text-violet-600" />
//           )}

//           <h2 className="text-xl font-semibold">{user?.displayName || 'User Name'}</h2>
//           <p className="text-gray-600">{user?.email || 'user@example.com'}</p>

//           {/* Upload Image */}
//           <div className="mt-3">
//             <label className="text-sm font-medium text-violet-600 cursor-pointer">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="hidden"
//               />
//               {uploading ? 'Uploading...' : '📤 Upload Profile Photo'}
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileModal;



// import React, { useState } from 'react';
// import { XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
// import { doc, updateDoc } from 'firebase/firestore';
// import { db } from '../../FirebaseConfig/config';

// const ProfileModal = ({ user, isOpen, onClose }) => {
//     console.log(user)
//   const [uploading, setUploading] = useState(false);
//   const [imageUrl, setImageUrl] = useState(user.profileImage || '');

//   if (!isOpen) return null;

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'qpt9twrk');

//     try {
//       const res = await fetch(`https://api.cloudinary.com/v1_1/dtcam6kvz/image/upload`, {
//         method: 'POST',
//         body: formData
//       });
//       const data = await res.json();
//       const imageUrl = data.secure_url;
//       setImageUrl(imageUrl);

//       // 🔄 Update Firestore
//       const userRef = doc(db, 'Rentals', user.displayName);
//       await updateDoc(userRef, { profileImage: imageUrl });

//       // 🔄 Update LocalStorage
//       const localData = JSON.parse(localStorage.getItem('loggedinRental'));
//       if (localData && localData.user) {
//         localData.user.profileImage = imageUrl;
//         localStorage.setItem('loggedinRental', JSON.stringify(localData));
//       }

//       alert('Profile image updated ✅');
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Upload failed ❌');
//     } finally {
//       setUploading(false);
//     }
//   };

//   console.log("Uploaded Image URL:", imageUrl);
// console.log("User Object:", user);

//   return (
//     <div className="fixed inset-0 z-50 flex justify-center items-start bg-black bg-opacity-40">
//       <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative animate-fadeIn">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
//         >
//           <XMarkIcon className="w-6 h-6" />
//         </button>

//         {/* Profile Section */}
//         <div className="flex flex-col items-center text-center space-y-3">
//           {imageUrl ? (
//             <img
//               src={user?.profileImage}
//               alt="Profile"
//               className="w-20 h-20 rounded-full object-cover border-4 border-violet-500 shadow"
//             />
//           ) : (
//             <UserCircleIcon className="w-20 h-20 text-violet-600" />
//           )}

//           <h2 className="text-xl font-semibold">{user?.displayName || 'User Name'}</h2>
//           <p className="text-gray-600">{user?.email || 'user@example.com'}</p>

//           {/* Upload Image */}
//           <div className="mt-3">
//             <label className="text-sm font-medium text-violet-600 cursor-pointer">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="hidden"
//               />
//               {uploading ? 'Uploading...' : '📤 Upload Profile Photo'}
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileModal;




import React, { useState, useEffect } from 'react';
import { XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../FirebaseConfig/config';

const ProfileModal = ({ user, isOpen, onClose }) => {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  // 🔄 Update imageUrl if user.profileImage changes
  // useEffect(() => {
  //   if (user?.profileImage) {
  //     setImageUrl(user.profileImage);
  //   }
  // }, [user]);
  useEffect(() => {
    const fetchProfileImage = async () => {
      if (!user?.displayName) return;

      try {
        const userRef = doc(db, 'Rentals', user.displayName);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          if (data.profileImage) {
            setImageUrl(data.profileImage);
          }
        }
      } catch (error) {
        console.error('Failed to fetch profile image:', error);
      }
    };

    fetchProfileImage();
  }, [user]);

  if (!isOpen) return null;

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'qpt9twrk');

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/dtcam6kvz/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      const uploadedUrl = data.secure_url;
      setImageUrl(uploadedUrl);

      // Update Firestore
      const userRef = doc(db, 'Rentals', user.displayName);
      await updateDoc(userRef, { profileImage: uploadedUrl });

      // Update LocalStorage
      const localData = JSON.parse(localStorage.getItem('loggedinRental'));
      if (localData?.user) {
        localData.user.profileImage = uploadedUrl;
        localStorage.setItem('loggedinRental', JSON.stringify(localData));
      }

      alert('Profile image updated ✅');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed ❌');
    } finally {
      setUploading(false);
    }
  };
  console.log(imageUrl)
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative animate-fadeIn mt-16">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center space-y-3">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-violet-500 shadow"
            />
          ) : (
            <UserCircleIcon className="w-20 h-20 text-violet-600" />
          )}

          <h2 className="text-xl font-semibold">{user?.displayName || 'User Name'}</h2>
          <p className="text-gray-600">{user?.email || 'user@example.com'}</p>

          {/* Upload Image */}
          <div className="mt-3">
            <label className="text-sm font-medium text-violet-600 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              {uploading ? 'Uploading...' : '📤 Upload Profile Photo'}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
