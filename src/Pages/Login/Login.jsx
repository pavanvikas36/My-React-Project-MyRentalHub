import React, { useState } from "react";
import "./Login.css"; // same animation as Signup
import { signInWithEmailAndPassword } from "firebase/auth"
import { authentication } from "../../FirebaseConfig/config";

const Login = () => {

  const [loginDetails, setLoginDetails] = useState({
    email:"",
    password:"",
    role:""
  })

  const handleLoginSubmit = async(e)=>{
    e.preventDefault()
    const {email, password, role} = loginDetails
    try{
      await signInWithEmailAndPassword(authentication, email, password, role)
      alert(`${role} Login Succesfull !!!`)
      console.log(loginDetails)
    }
    catch(error){
      console.error(error, "err")
    }
  }

  // console.log(loginDetails)
  return (
        <div className="w-full bg-gradient-to-r from-fuchsia-800 via-fuchsia-700 to-fuchsia-600 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Welcome Back
        </h2>
        <form className="space-y-4" onSubmit={handleLoginSubmit}>
          {/* Role Selector */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Select Your Role
            </label>
            <select
              className="select select-bordered w-full text-black" onChange={(e)=>setLoginDetails({...loginDetails, role:e.target.value})}
              required
            >
              <option disabled selected>
                Select your role
              </option>
              <option>Owner</option>
              <option>Rental</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="input input-bordered w-full text-black" onChange={(e)=>setLoginDetails({...loginDetails, email:e.target.value})}
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
              className="input input-bordered w-full text-black" onChange={(e)=>setLoginDetails({...loginDetails, password:e.target.value})}
              required
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="btn w-full bg-[#D81B60] hover:bg-[#FF4081] text-white"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-black mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="font-semibold underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
