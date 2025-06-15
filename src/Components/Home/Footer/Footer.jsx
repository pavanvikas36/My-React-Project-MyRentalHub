import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-violet-900 text-violet-100 px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyRentalHub</h2>
          <p className="text-sm text-violet-200">
            Your trusted platform for finding and renting homes securely, easily, and quickly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-violet-300">Home</a></li>
            <li><a href="/properties" className="hover:text-violet-300">Properties</a></li>
            <li><a href="/about" className="hover:text-violet-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-violet-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail size={16} /> support@myrentalhub.com</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Hyderabad, India</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-violet-300"><Facebook size={20} /></a>
            <a href="#" className="hover:text-violet-300"><Twitter size={20} /></a>
            <a href="#" className="hover:text-violet-300"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-violet-800 pt-6 text-center text-sm text-violet-300">
        &copy; {new Date().getFullYear()} MyRentalHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
