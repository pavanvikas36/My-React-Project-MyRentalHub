import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-violet-100 text-violet-900 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-violet-700 mb-2">MyRentalHub</h2>
          <p className="text-sm text-violet-700">
            Find, rent, and manage your dream property with ease. MyRentalHub connects renters and owners seamlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-violet-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-violet-500">Home</a></li>
            <li><a href="/properties" className="hover:text-violet-500">Browse Properties</a></li>
            <li><a href="/login" className="hover:text-violet-500">Login</a></li>
            <li><a href="/register" className="hover:text-violet-500">Register</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-violet-800 mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-violet-600 hover:text-violet-800"><FaFacebookF size={20} /></a>
            <a href="#" className="text-violet-600 hover:text-violet-800"><FaInstagram size={20} /></a>
            <a href="#" className="text-violet-600 hover:text-violet-800"><FaTwitter size={20} /></a>
            <a href="#" className="text-violet-600 hover:text-violet-800"><FaLinkedin size={20} /></a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-violet-500 border-t border-violet-300 pt-4">
        © {new Date().getFullYear()} MyRentalHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
