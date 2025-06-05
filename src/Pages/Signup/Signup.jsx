import React, { useState } from "react";
import "./Signup.css"; // Import the CSS for animation
import { authentication, db } from "../../FirebaseConfig/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate()
  
  const [signupDetails, setSignupDetails] = useState({
    name:"", email:"", password:"", role:""
  })

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const accountCreated = await createUserWithEmailAndPassword(
        authentication,
        signupDetails.email,
        signupDetails.password
      );
      console.log(accountCreated);

      await setDoc(doc(db, `${signupDetails.role}s`, signupDetails.name), {
        name: signupDetails.name,
        email: signupDetails.email,
        role: signupDetails.role,
        password:signupDetails.password,
        id: accountCreated.user.uid
      });
      alert("Account Created SuccessFully")
      navigate("/login")
    } catch (error) {
      alert("Give me proper Details")
      console.log(error, "Err");
    }
  };


  return (
    <div className="w-full bg-gradient-to-r from-fuchsia-800 via-fuchsia-700 to-fuchsia-600 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
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
              className="select select-bordered w-full text-black" value={signupDetails.role} onChange={(e)=>setSignupDetails({...signupDetails, role:e.target.value})}
              required
            >
              <option value="" disabled selected>
                Select your role
              </option>
              <option>Owner</option>
              <option>Rental</option>
            </select>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Pavan Vikas"
              className="input input-bordered w-full text-black" onChange={(e)=>setSignupDetails({...signupDetails, name:e.target.value})}
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
              className="input input-bordered w-full text-black" onChange={(e)=>setSignupDetails({...signupDetails, email:e.target.value})}
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
              className="input input-bordered w-full text-black" onChange={(e)=>setSignupDetails({...signupDetails, password:e.target.value})}
              required
            />
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="btn w-full bg-[#D81B60] hover:bg-[#FF4081] text-white"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-black mt-6">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
