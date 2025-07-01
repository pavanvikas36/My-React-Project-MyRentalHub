// import { onAuthStateChanged } from "firebase/auth";
// import React, { useEffect, useState } from "react";
// import { authentication } from "../../../FirebaseConfig/config";

// const BannerSection = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [rentalName, setRentalName] = useState("");

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(authentication, (user) => {
//       if (user) {
//         console.log("🔐 Authenticated user:", user);
//         setRentalName(user.displayName || "Rental")
//       } else{
//         console.log("🚫 No user logged in")
//       }
//     })

//     return () => unsubscribe()
//   }, [])

//   const handleSearch = () => {
//     console.log("Searching for:", searchQuery);
//   };

//   return (
//     <div className="w-full bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700 text-white py-16 px-4 sm:px-6 md:px-10">
//       <div className="max-w-5xl mx-auto text-center space-y-6">
        
//         {/* Welcome message */}
//         <p className="text-lg md:text-xl text-violet-100 font-medium">
//           Welcome, <span className="text-violet-200 font-bold">{rentalName || "Rental"}</span> – Your Trusted Rental Partner
//         </p>

//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-violet-50">
//           Find Your Perfect Home
//         </h1>

//         <p className="text-base sm:text-lg md:text-xl text-violet-100">
//           Discover top rental properties with ease, security, and speed.{" "}
//           <span className="font-semibold text-violet-200">MyRentalHub</span>
//         </p>

//         {/* Search bar */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
//           <input
//             type="text"
//             placeholder="Search by location or property..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full sm:w-2/3 px-4 py-3 rounded-md text-violet-900 bg-violet-50 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-violet-200 hover:bg-violet-300 text-violet-900 font-semibold px-6 py-3 rounded-md w-full sm:w-auto transition"
//           >
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerSection;



import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { authentication } from "../../../FirebaseConfig/config";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerSection = ({ searchQuery, setSearchQuery }) => {
  const [rentalName, setRentalName] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      if (user) {
        console.log("🔐 Authenticated user:", user);
        setRentalName(user.displayName || "Rental");
      } else {
        console.log("🚫 No user logged in");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-full bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700 text-white py-16 px-4 sm:px-6 md:px-10">
      <div
        className="max-w-5xl mx-auto text-center space-y-6"
        data-aos="fade-up"
      >
        {/* Welcome message */}
        <p className="text-lg md:text-xl text-violet-100 font-medium" data-aos="fade-down">
          Welcome, <span className="text-violet-200 font-bold">{rentalName || "Rental"}</span> – Your Trusted Rental Partner
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-violet-50" data-aos="zoom-in">
          Find Your Perfect Home
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-violet-100" data-aos="fade-up">
          Discover top rental properties with ease, security, and speed.{" "}
          <span className="font-semibold text-violet-200">MyRentalHub</span>
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          data-aos="fade-up"
        >
          {/* input and button here */}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;




{/* <p className="text-lg md:text-xl font-medium text-violet-100">
          Hey <span className="text-violet-300 font-bold">{rentalName}</span> 👋, welcome back to
          <span className="text-violet-200 font-bold"> MyRentalHub</span>! Let’s help you find a comfy place to call home.
        </p> */}



// import { onAuthStateChanged } from "firebase/auth";
// import React, { useEffect, useState } from "react";
// import { authentication } from "../../../FirebaseConfig/config";
// import { motion } from "framer-motion";

// const BannerSection = ({ searchQuery, setSearchQuery }) => {
//   const [rentalName, setRentalName] = useState("");

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(authentication, (user) => {
//       if (user) {
//         console.log("🔐 Authenticated user:", user);
//         setRentalName(user.displayName || "Rental");
//       } else {
//         console.log("🚫 No user logged in");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleSearch = () => {
//     console.log("Searching for:", searchQuery);
//   };

//   return (
//     <div className="w-full bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700 text-white py-16 px-4 sm:px-6 md:px-10">
//       <motion.div
//         className="max-w-5xl mx-auto text-center space-y-6"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.p
//           className="text-lg md:text-xl text-violet-100 font-medium"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           Welcome, <span className="text-violet-200 font-bold">{rentalName || "Rental"}</span> – Your Trusted Rental Partner
//         </motion.p>

//         <motion.h1
//           className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-violet-50"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           Find Your Perfect Home
//         </motion.h1>

//         <motion.p
//           className="text-base sm:text-lg md:text-xl text-violet-100"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//         >
//           Discover top rental properties with ease, security, and speed.{" "}
//           <span className="font-semibold text-violet-200">MyRentalHub</span>
//         </motion.p>

//         <motion.div
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//         >
//           {/* input and button */}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default BannerSection;        