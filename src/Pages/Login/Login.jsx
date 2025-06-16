// import React, { useState } from "react";
// import "./Login.css"; // same animation as Signup
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { authentication } from "../../FirebaseConfig/config";
// import { useNavigate } from "react-router-dom";
// // import 'animate.css';
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css'; // Optional but good for styling

// const Login = () => {
//   const navigate = useNavigate()

//   const [loginDetails, setLoginDetails] = useState({
//     email: "",
//     password: "",
//     role: ""
//   });

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password, role } = loginDetails;
//     try {
//       const loggedinUser = await signInWithEmailAndPassword(authentication, email, password);
//       Swal.fire({
//         title: `${role} Login Successful !!!`,
//         text: 'Welcome back! Redirecting...',
//         icon: 'success',
//         iconColor: '#8b5cf6', // Tailwind Violet-500
//         background: '#f5f3ff', // Tailwind Violet-50
//         color: '#4c1d95',      // Tailwind Violet-900
//         timer: 2500,
//         timerProgressBar: true,
//         showConfirmButton: false,
//       });
//       console.log(loginDetails);

//       if(role === "Owner"){
//         localStorage.setItem("loggedinOwner", JSON.stringify(loggedinUser))
//       }
//       else{
//         localStorage.setItem("loggedinRental", JSON.stringify(loggedinUser))
//       }

//       navigate(`/${role}DashBoard`)

//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div className="w-full bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700 min-h-screen flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
//         <h2 className="text-3xl font-bold text-center text-violet-900 mb-6">
//           Welcome Back
//         </h2>
//         <form className="space-y-4" onSubmit={handleLoginSubmit}>
//           {/* Role Selector */}
//           <div>
//             <label className="block text-sm font-medium text-violet-900 mb-1">
//               Select Your Role
//             </label>
//             <select
//               className="select select-bordered w-full text-violet-900 bg-violet-50 border-violet-200"
//               onChange={(e) =>
//                 setLoginDetails({ ...loginDetails, role: e.target.value })
//               }
//               required
//             >
//               <option disabled selected>
//                 Select your role
//               </option>
//               <option>Owner</option>
//               <option>Rental</option>
//             </select>
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-violet-900 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="example@email.com"
//               className="input input-bordered w-full text-violet-900 bg-violet-50 border-violet-200"
//               onChange={(e) =>
//                 setLoginDetails({ ...loginDetails, email: e.target.value })
//               }
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-violet-900 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className="input input-bordered w-full text-violet-900 bg-violet-50 border-violet-200"
//               onChange={(e) =>
//                 setLoginDetails({ ...loginDetails, password: e.target.value })
//               }
//               required
//             />
//           </div>

//           {/* Login Button */}
//           <div>
//             <button
//               type="submit"
//               className="btn w-full bg-violet-600 hover:bg-violet-700 text-white transition"
//             >
//               Login
//             </button>
//           </div>
//         </form>

//         <p className="text-sm text-center text-violet-800 mt-6">
//           Don't have an account?{" "}
//           <a href="/signup" className="font-semibold underline text-violet-700 hover:text-violet-900">
//             Sign up here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import "./Login.css";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { authentication } from "../../FirebaseConfig/config";
// import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';

// const Login = () => {
//   const navigate = useNavigate();

//   const [loginDetails, setLoginDetails] = useState({
//     email: "",
//     password: "",
//     role: ""
//   });

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password, role } = loginDetails;
//     try {
//       const loggedinUser = await signInWithEmailAndPassword(authentication, email, password);
//       Swal.fire({
//         title: `${role} Login Successful !!!`,
//         text: 'Welcome back! Redirecting...',
//         icon: 'success',
//         iconColor: '#8b5cf6',
//         background: '#f5f3ff',
//         color: '#000000',
//         timer: 2500,
//         timerProgressBar: true,
//         showConfirmButton: false,
//       });

//       if (role === "Owner") {
//         localStorage.setItem("loggedinOwner", JSON.stringify(loggedinUser));
//         navigate(`/${role}DashBoard`);
//       } else {
//         localStorage.setItem("loggedinRental", JSON.stringify(loggedinUser));
//         navigate("/home")
//       }

//       // navigate(`/${role}DashBoard`);

//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div className="w-full bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700 min-h-screen flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
//         <h2 className="text-3xl font-bold text-center text-black mb-6">
//           Welcome Back
//         </h2>
//         <form className="space-y-4" onSubmit={handleLoginSubmit}>
//           {/* Role Selector */}
//           <div>
//             <label className="block text-sm font-medium text-black mb-1">
//               Select Your Role
//             </label>
//             <select
//               className="select select-bordered w-full text-black bg-violet-50 border-violet-200"
//               onChange={(e) =>
//                 setLoginDetails({ ...loginDetails, role: e.target.value })
//               }
//               required
//             >
//               <option disabled selected>
//                 Select your role
//               </option>
//               <option>Owner</option>
//               <option>Rental</option>
//             </select>
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-black mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="example@email.com"
//               className="input input-bordered w-full text-black bg-violet-50 border-violet-200"
//               onChange={(e) =>
//                 setLoginDetails({ ...loginDetails, email: e.target.value })
//               }
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-black mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className="input input-bordered w-full text-black bg-violet-50 border-violet-200"
//               onChange={(e) =>
//                 setLoginDetails({ ...loginDetails, password: e.target.value })
//               }
//               required
//             />
//           </div>

//           {/* Login Button */}
//           <div>
//             <button
//               type="submit"
//               className="btn w-full bg-violet-600 hover:bg-violet-700 text-white transition"
//             >
//               Login
//             </button>
//           </div>
//         </form>

//         <p className="text-sm text-center text-black mt-6">
//           Don't have an account?{" "}
//           <a href="/signup" className="font-semibold underline text-black hover:text-white">
//             Sign up here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import "./Login.css";
import {
  signInWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import { authentication } from "../../FirebaseConfig/config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    role: ""
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email, password, role } = loginDetails;
    try {
      const loggedinUser = await signInWithEmailAndPassword(authentication, email, password);
      Swal.fire({
        title: `${role} Login Successful !!!`,
        text: "Welcome back! Redirecting...",
        icon: "success",
        iconColor: "#8b5cf6",
        background: "#f5f3ff",
        color: "#000000",
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      if (role === "Owner") {
        localStorage.setItem("loggedinOwner", JSON.stringify(loggedinUser));
        navigate(`/${role}DashBoard`);
      } else {
        localStorage.setItem("loggedinRental", JSON.stringify(loggedinUser));
        navigate("/home");
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "Login Failed ❌",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#8b5cf6",
      });
    }
  };

  const handleGuestLogin = async () => {
    try {
      const guestUser = await signInAnonymously(authentication);
      Swal.fire({
        title: `Guest Login Successful 🎉`,
        text: "Welcome, Guest! Redirecting...",
        icon: "success",
        iconColor: "#8b5cf6",
        background: "#f5f3ff",
        color: "#000000",
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      localStorage.setItem("guestUser", JSON.stringify(guestUser));
      navigate("/home");
    } catch (error) {
      console.error("Guest login error:", error);
      Swal.fire({
        title: "Guest Login Failed ❌",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#8b5cf6",
      });
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Welcome Back
        </h2>
        <form className="space-y-4" onSubmit={handleLoginSubmit}>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Select Your Role
            </label>
            <select
              className="select select-bordered w-full text-black bg-violet-50 border-violet-200"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, role: e.target.value })
              }
              required
            >
              <option disabled selected>
                Select your role
              </option>
              <option>Owner</option>
              <option>Rental</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="input input-bordered w-full text-black bg-violet-50 border-violet-200"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, email: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full text-black bg-violet-50 border-violet-200"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <button
              type="submit"
              className="btn w-full bg-violet-600 hover:bg-violet-700 text-white transition"
            >
              Login
            </button>

            <button
              type="button"
              onClick={handleGuestLogin}
              className="btn w-full bg-gray-200 hover:bg-gray-300 text-black transition"
            >
              Continue as Guest
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-black mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="font-semibold underline text-black hover:text-black">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
