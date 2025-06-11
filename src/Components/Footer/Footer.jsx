import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-violet-900 text-violet-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-violet-50 mb-4">Contact Us</h2>
          <p className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-violet-300" /> support@myrentalhub.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-violet-300" /> +91 98765 43210
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold text-violet-50 mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline hover:text-violet-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:underline hover:text-violet-300">About</a>
            </li>
            <li>
              <a href="/properties" className="hover:underline hover:text-violet-300">Properties</a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-xl font-semibold text-violet-50 mb-4">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-violet-300"><FaFacebook /></a>
            <a href="#" className="hover:text-violet-300"><FaInstagram /></a>
            <a href="#" className="hover:text-violet-300"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-violet-400">
        © {new Date().getFullYear()} MyRentalHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
