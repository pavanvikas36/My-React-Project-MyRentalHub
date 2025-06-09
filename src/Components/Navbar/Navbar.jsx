import React from "react";
import logo from "../../assets/MyRentalHubLogoDesign3.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Navbar = () => {
  const navegate = useNavigate()
  const loggedinOwner = JSON.parse(localStorage.getItem("loggedinOwner"))

  const handleLogout = async()=>{
    const auth = getAuth()
    try{
      await signOut(auth)
      localStorage.removeItem("loggedinOwner")
      Swal.fire({
        title: 'Logout Successful!',
        text: 'You have been securely logged out.',
        icon: 'info',
        iconColor: '#7c3aed',   // Tailwind Violet-600
        background: '#f5f3ff',  // Tailwind Violet-50
        color: '#4c1d95',       // Tailwind Violet-900
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      navegate("/login")
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div className="navbar px-4 md:px-8 shadow-md flex justify-between items-center bg-violet-800">
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

      {/* Navbar Center (Desktop Only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white gap-4">
          {loggedinOwner ? <>
            <li><Link className="hover:text-violet-300">Add Property</Link></li>
            <li><Link to="/about" className="hover:text-violet-300">My Properties</Link></li>
          </> : <>
            <li><Link to="/home" className="hover:text-violet-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-violet-300">About</Link></li>
            <li><Link to="/properties" className="hover:text-violet-300">Properties</Link></li>
            <li><Link to="/contact" className="hover:text-violet-300">Contact</Link></li>
          </>}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        {/* Theme Switcher */}
        <label className="swap swap-rotate cursor-pointer text-white">
          <input type="checkbox" className="theme-controller hidden" value="dark" />
          <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 12a7 7 0 1014 0 7 7 0 00-14 0z" /></svg>
          <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64 13.2A9 9 0 1112 3a9.001 9.001 0 009.64 10.2z" /></svg>
        </label>

        {/* Desktop Login/Signup */}
        <div className="hidden md:flex gap-3 items-center">
          {loggedinOwner ? <>
            <button onClick={handleLogout}><NavLink className="text-white bg-violet-600 px-4 py-2 rounded-md hover:bg-violet-500 transition font-medium">Logout</NavLink></button>
          </> : <>
            <NavLink to="/login" className="text-white hover:text-violet-300 font-medium transition">Login</NavLink>
            <NavLink to="/signup" className="text-white bg-violet-600 px-4 py-2 rounded-md hover:bg-violet-500 transition font-medium">Signup</NavLink>
          </>}
        </div>

        {/* Profile Avatar */}
        <div className="dropdown dropdown-end hidden md:block">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img src="https://i.pravatar.cc/300?img=13" alt="User Avatar" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-violet-700 rounded-box w-52">
            <li><a className="hover:bg-violet-100 rounded">Profile</a></li>
            <li><a className="hover:bg-violet-100 rounded">Settings</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-white text-violet-800 rounded-box w-52">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* <li className="divider"></li> */}
            {loggedinOwner ? (
              <li>
                <button onClick={handleLogout}><NavLink className="text-white bg-violet-600 px-4 py-2 rounded-md hover:bg-violet-500 transition font-medium text-center">Logout</NavLink></button>
              </li>
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
    </div>
  );
};

export default Navbar;


