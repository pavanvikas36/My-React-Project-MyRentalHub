// import React, { useState } from "react";
// import "./Signup.css"; // You can remove if no longer used
// import { authentication, db } from "../../FirebaseConfig/config";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { setDoc, doc } from "firebase/firestore";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [signupDetails, setSignupDetails] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: ""
//   });

//   const [alertMsg, setAlertMsg] = useState(null); // Custom alert state

//   const showAlert = (message, duration = 3000) => {
//     setAlertMsg(message);
//     setTimeout(() => setAlertMsg(null), duration);
//   };

//   const handleSignupSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const accountCreated = await createUserWithEmailAndPassword(
//         authentication,
//         signupDetails.email,
//         signupDetails.password
//       );

//       await updateProfile(accountCreated.user,{
//         displayName: signupDetails.name
//       })

//       await setDoc(doc(db, `${signupDetails.role}s`, signupDetails.name), {
//         name: signupDetails.name,
//         email: signupDetails.email,
//         role: signupDetails.role,
//         password: signupDetails.password,
//         id: accountCreated.user.uid
//       });

//       showAlert("🎉 Account Created Successfully!");
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (error) {
//       showAlert("⚠️ Please provide valid details.");
//       console.error("Signup Error:", error);
//     }
//   };

//   return (
//     <div className="w-full bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700 min-h-screen flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 relative">
//         {/* Alert */}
//         {alertMsg && (
//           <div className="absolute top-3 left-1/2 -translate-x-1/2 w-full px-4 z-50">
//             <div className="flex items-start gap-2 p-3 rounded-lg bg-violet-100 border border-violet-300 shadow-md text-violet-800 animate-fade-in">
//               <span className="text-sm font-medium flex-1">{alertMsg}</span>
//               <button
//                 className="text-violet-600 hover:text-violet-900 transition"
//                 onClick={() => setAlertMsg(null)}
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}
//                   viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         )}

//         <h2 className="text-3xl font-bold text-center text-violet-900 mb-6">
//           Create an Account
//         </h2>

//         <form className="space-y-4" onSubmit={handleSignupSubmit}>
//           {/* Role Selector */}
//           <div>
//             <label className="block text-sm font-medium text-violet-900 mb-1">
//               Select Your Role
//             </label>
//             <select
//               className="select select-bordered w-full text-violet-900 bg-violet-50 border-violet-200"
//               value={signupDetails.role}
//               onChange={(e) =>
//                 setSignupDetails({ ...signupDetails, role: e.target.value })
//               }
//               required
//             >
//               <option value="" disabled>Select your role</option>
//               <option>Owner</option>
//               <option>Rental</option>
//             </select>
//           </div>

//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-violet-900 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               placeholder="Pavan Vikas"
//               className="input input-bordered w-full text-violet-900 bg-violet-50 border-violet-200"
//               onChange={(e) =>
//                 setSignupDetails({ ...signupDetails, name: e.target.value })
//               }
//               required
//             />
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
//                 setSignupDetails({ ...signupDetails, email: e.target.value })
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
//                 setSignupDetails({ ...signupDetails, password: e.target.value })
//               }
//               required
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="btn w-full bg-violet-600 hover:bg-violet-700 text-white transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-sm text-center text-violet-800 mt-6">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="font-semibold underline text-violet-700 hover:text-violet-900"
//           >
//             Login here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import "./Signup.css";
import { authentication, db } from "../../FirebaseConfig/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const [alertMsg, setAlertMsg] = useState(null);

  const showAlert = (message, duration = 3000) => {
    setAlertMsg(message);
    setTimeout(() => setAlertMsg(null), duration);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const accountCreated = await createUserWithEmailAndPassword(
        authentication,
        signupDetails.email,
        signupDetails.password
      );

      await updateProfile(accountCreated.user, {
        displayName: signupDetails.name
      });

      await setDoc(doc(db, `${signupDetails.role}s`, signupDetails.name), {
        name: signupDetails.name,
        email: signupDetails.email,
        role: signupDetails.role,
        password: signupDetails.password,
        id: accountCreated.user.uid
      });

      showAlert("🎉 Account Created Successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      showAlert("⚠️ Please provide valid details.");
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 relative">
        {/* Alert */}
        {alertMsg && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-full px-4 z-50">
            <div className="flex items-start gap-2 p-3 rounded-lg bg-white border border-gray-300 shadow-md text-black animate-fade-in">
              <span className="text-sm font-medium flex-1">{alertMsg}</span>
              <button
                className="text-black hover:text-white transition"
                onClick={() => setAlertMsg(null)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSignupSubmit}>
          {/* Role Selector */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Select Your Role
            </label>
            <select
              className="select select-bordered w-full text-black bg-violet-50 border-violet-200"
              value={signupDetails.role}
              onChange={(e) =>
                setSignupDetails({ ...signupDetails, role: e.target.value })
              }
              required
            >
              <option value="" disabled>Select your role</option>
              <option>Owner</option>
              <option>Rental</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Pavan Vikas"
              className="input input-bordered w-full text-black bg-violet-50 border-violet-200"
              onChange={(e) =>
                setSignupDetails({ ...signupDetails, name: e.target.value })
              }
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="input input-bordered w-full text-black bg-violet-50 border-violet-200"
              onChange={(e) =>
                setSignupDetails({ ...signupDetails, email: e.target.value })
              }
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full text-black bg-violet-50 border-violet-200"
              onChange={(e) =>
                setSignupDetails({ ...signupDetails, password: e.target.value })
              }
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn w-full bg-violet-600 hover:bg-violet-700 text-white transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-black mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold underline text-black hover:text-white"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
