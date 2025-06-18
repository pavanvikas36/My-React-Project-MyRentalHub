// import React, { useState, useEffect } from "react";
// import logo from "../../assets/MyRentalHubLogoDesign3.png";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { signOut, getAuth } from "firebase/auth";
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
// import { BiHomeHeart } from "react-icons/bi";
// import ProfileModal from "../ProfileModal/ProfileModal"; // adjust path if needed

// const Navbar = () => {
//   const [user, setUser] = useState({});
//   const [showModal, setShowModal] = useState(false);

//   const navegate = useNavigate()
//   const guestUser = JSON.parse(localStorage.getItem("guestUser"));
//   const loggedinOwner = JSON.parse(localStorage.getItem("loggedinOwner"))
//   const loggedinRental = JSON.parse(localStorage.getItem("loggedinRental"))

//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("loggedinRental")) || {};
//     setUser(loggedUser.user || {});
//   }, []);

//   const handleLogout = async () => {
//     const auth = getAuth();


//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: "You will be logged out!",
//       icon: 'warning',
//       iconColor: '#8b5cf6', // Tailwind Violet-500
//       showCancelButton: true,
//       confirmButtonColor: '#7c3aed', // Tailwind Violet-600
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, logout',
//       cancelButtonText: 'No, stay',
//       background: '#f5f3ff',
//       color: '#4c1d95',
//     });

//     if (result.isConfirmed) {
//       try {
//         await signOut(auth);
//         localStorage.removeItem("loggedinOwner");
//         localStorage.removeItem("loggedinRental");
//         localStorage.removeItem("guestUser");

//         Swal.fire({
//           title: 'Logout Successful!',
//           text: 'You have been securely logged out.',
//           icon: 'info',
//           iconColor: '#8b5cf6', // Tailwind Violet-500
//           background: '#f5f3ff',
//           color: '#4c1d95',      // Tailwind Violet-900
//           timer: 1000,
//           timerProgressBar: true,
//           showConfirmButton: false,
//         });

//         setTimeout(() => {
//           navegate("/login"); // Small note: make sure this is spelled `navigate` if using `useNavigate()`
//         }, 1000);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };


//   return (
//     <div className="navbar sticky top-0 z-50 px-4 md:px-8 shadow-md flex justify-between items-center bg-violet-800">
//       {/* Navbar Start */}
//       <div className="navbar-start">
//         <NavLink
//           to="/home"
//           className="btn btn-ghost normal-case text-xl flex items-center gap-2 text-white hover:text-violet-300 transition"
//         >
//           <img src={logo} alt="MyRentalHub Logo" className="h-12 w-auto" />
//           <span className="hidden sm:inline-block font-semibold">MyRentalHub</span>
//         </NavLink>
//       </div>

//       {/* Navbar Center (Desktop Only) */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 text-white gap-4">
//           {loggedinOwner ? <>
//             {/* <li><Link to="" className="hover:text-violet-300">Bookings</Link></li> */}
//             {/* <li><Link className="hover:text-violet-300">Add Property</Link></li>
//             <li><Link to="/about" className="hover:text-violet-300">My Properties</Link></li> */}
//           </> : <>
//             <li><Link to="/home" className="hover:text-violet-300">Home</Link></li>
//             <li><Link to="/about" className="hover:text-violet-300">About</Link></li>
//             <li><Link to="/RentalDashboard" className="hover:text-violet-300">Properties</Link></li>
//             <li><Link to="/contact" className="hover:text-violet-300">Contact</Link></li>
//             <li><Link to="/MyBookings" className="hover:text-violet-300">My Bookings</Link></li>
//           </>}
//         </ul>
//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end flex items-center gap-3">
//         {/* Desktop Login/Signup */}
//         <div className="hidden md:flex gap-3 items-center">
//           {loggedinOwner || loggedinRental || guestUser  ? <>
//             <Link to="/mywishlist" className="text-white hover:text-violet-400 transition text-2xl" title="My Wishlist"><BiHomeHeart /></Link>
//             <button onClick={handleLogout}><NavLink className="text-white bg-violet-600 px-4 py-2 rounded-md hover:bg-violet-500 transition font-medium">Logout</NavLink></button>
//           </> : <>
//             <NavLink to="/login" className="text-white hover:text-violet-300 font-medium transition">Login</NavLink>
//             <NavLink to="/signup" className="text-white bg-violet-600 px-4 py-2 rounded-md hover:bg-violet-500 transition font-medium">Signup</NavLink>
//           </>}
//         </div>

//         {/* Profile Avatar */}
//         <div className="dropdown dropdown-end hidden md:block">
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//             <div className="w-10 rounded-full ring ring-white ring-offset-base-100">
//               {user?.profileImage ? (
//                 <img src={user.profileImage} alt="Profile" className="object-cover" />
//               ) : (
//                 <img src="https://i.pravatar.cc/150?u=user" alt="Default Avatar" className="object-cover" />
//               )}
//             </div>
//           </div>
//           <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-violet-700 rounded-box w-52">
//             <li>
//               <button
//                 onClick={() => setShowModal(true)}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-100 rounded w-full text-left"
//               >
//                 Profile
//               </button>
//             </li>

//             <ProfileModal user={user} isOpen={showModal} onClose={() => setShowModal(false)} />
//             <li><a className="hover:bg-violet-100 rounded">Settings</a></li>
//           </ul>
//         </div>


//         {/* Mobile Menu */}
//         <div className="dropdown dropdown-end lg:hidden">
//           <label tabIndex={0} className="btn btn-ghost text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </label>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-white text-violet-800 rounded-box w-52">
//             <li><Link to="/home">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/RentalDashboard">Properties</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//             {/* <li className="divider"></li> */}
//             {loggedinOwner || loggedinRental || guestUser  ? (
//               <>
//                 <li>
//                   <Link to="/mywishlist" className="text-white hover:text-violet-400 transition text-2xl" title="My Wishlist"><BiHomeHeart /></Link>
//                 </li>
//                 <li>
//                   <button onClick={handleLogout}><NavLink className="text-white bg-violet-600 px-4 py-2 rounded-md hover:bg-violet-500 transition font-medium text-center">Logout</NavLink></button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <NavLink to="/login" className="text-violet-800 hover:bg-violet-100 px-4 py-2 m-1 rounded font-medium text-center">Login</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/signup" className="text-white bg-violet-600 px-4 py-2 m-1 rounded-md hover:bg-violet-500 transition font-medium text-center">Signup</NavLink>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import logo from "../../assets/MyRentalHubLogoDesign3.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { BiHomeHeart } from "react-icons/bi";
import ProfileModal from "../ProfileModal/ProfileModal";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig/config";

const Navbar = () => {
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const navigate = useNavigate();
  const guestUser = JSON.parse(localStorage.getItem("guestUser"));
  const loggedinOwner = JSON.parse(localStorage.getItem("loggedinOwner"));
  const loggedinRental = JSON.parse(localStorage.getItem("loggedinRental"));

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedinRental"));
    setUser(loggedUser?.user || {});
  }, []);

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (!user?.displayName) return;

      try {
        const userRef = doc(db, 'Rentals', user.displayName); // displayName as document ID
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          if (data.profileImage) {
            setImageUrl(data.profileImage); // ✅ sets image URL in state
          }
        }
      } catch (error) {
        console.error('Failed to fetch profile image:', error);
      }
    };

    fetchProfileImage();
  }, [user]);

  const handleLogout = async () => {
    const auth = getAuth();
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      iconColor: '#8b5cf6',
      showCancelButton: true,
      confirmButtonColor: '#7c3aed',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'No, stay',
      background: '#f5f3ff',
      color: '#4c1d95',
    });

    if (result.isConfirmed) {
      try {
        await signOut(auth);
        localStorage.removeItem("loggedinOwner");
        localStorage.removeItem("loggedinRental");
        localStorage.removeItem("guestUser");

        Swal.fire({
          title: 'Logout Successful!',
          text: 'You have been securely logged out.',
          icon: 'info',
          iconColor: '#8b5cf6',
          background: '#f5f3ff',
          color: '#4c1d95',
          timer: 1000,
          timerProgressBar: true,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(imageUrl)
  return (
    <div className="navbar sticky top-0 z-50 px-4 md:px-8 shadow-md flex justify-between items-center bg-violet-800">
      {/* Navbar Start */}
      <div className="navbar-start">
        <NavLink
          to="/home"
          className="btn btn-ghost normal-case text-xl flex items-center gap-2 text-white hover:text-violet-300 transition"
        >
          <img src={logo} alt="MyRentalHub Logo" className="h-12 w-auto" />
          <span className="hidden sm:inline-block font-semibold">MyRentalHub</span>
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white gap-4">
          {loggedinOwner ? (
            <>
              {/* Owner Links (optional) */}
              {/* <li><Link className="hover:text-violet-300">Add Property</Link></li> */}
            </>
          ) : (
            <>
              <li><Link to="/" className="hover:text-violet-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-violet-300">About</Link></li>
              <li><Link to="/RentalDashboard" className="hover:text-violet-300">Properties</Link></li>
              <li><Link to="/contact" className="hover:text-violet-300">Contact</Link></li>
              <li><Link to="/MyBookings" className="hover:text-violet-300">My Bookings</Link></li>
            </>
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        <div className="hidden md:flex gap-3 items-center">
          {(loggedinOwner || loggedinRental || guestUser) ? (
            <>
              <Link to="/mywishlist" className="text-white hover:text-violet-400 transition text-2xl" title="My Wishlist">
                <BiHomeHeart />
              </Link>
              <button onClick={handleLogout} aria-label="Logout">
                <span className="text-white bg-violet-600 px-4 py-2 rounded-md hover:bg-violet-500 transition font-medium">Logout</span>
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="text-white hover:text-violet-300 font-medium transition">Login</NavLink>
              <NavLink to="/signup" className="text-white bg-violet-600 px-4 py-2 rounded-md hover:bg-violet-500 transition font-medium">Signup</NavLink>
            </>
          )}
        </div>

        {/* Avatar Dropdown */}
        {(loggedinRental || loggedinOwner) && (
          <div className="dropdown dropdown-end hidden md:block">
            <div role="button" tabIndex={0} aria-label="User profile menu" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-white ring-offset-base-100">
                <img
                  src={imageUrl || "https://i.pravatar.cc/150?u=user"}
                  alt="User"
                  className="object-cover"
                />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-violet-700 rounded-box w-52">
              <li>
                <button onClick={() => setShowModal(true)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-100 rounded w-full text-left">
                  Profile
                </button>
              </li>
              <li>
                <a className="hover:bg-violet-100 rounded">Settings</a>
              </li>
              <li className="px-4 text-xs text-gray-500 mt-2">
                {loggedinOwner && "Logged in as: Owner"}
                {loggedinRental && "Logged in as: Renter"}
              </li>
            </ul>
          </div>
        )}

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-white" aria-label="Mobile menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-white text-violet-800 rounded-box w-52">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/RentalDashboard">Properties</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {(loggedinOwner || loggedinRental || guestUser) ? (
              <>
                <li>
                  <Link to="/mywishlist" title="My Wishlist"><BiHomeHeart className="text-violet-700 text-2xl" /></Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-white bg-violet-600 px-4 py-2 rounded-md hover:bg-violet-500 transition font-medium text-center">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login" className="text-violet-800 hover:bg-violet-100 px-4 py-2 m-1 rounded font-medium text-center">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className="text-white bg-violet-600 px-4 py-2 m-1 rounded-md hover:bg-violet-500 transition font-medium text-center">Signup</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Profile Modal (conditionally rendered) */}
      {showModal && (
        <ProfileModal user={user} isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Navbar;
