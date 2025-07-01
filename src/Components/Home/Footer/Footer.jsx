import React from "react";
import logo from "../../../assets/MyRentalHubLogoDesign3.png"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <footer className="bg-violet-900 text-violet-100 px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div className="flex items-center space-x-4" data-aos="fade-right">
          <img
            src={logo}
            alt="MyRentalHub Logo"
            className="w-15 h-12 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">MyRentalHub</h2>
            <p className="text-sm text-violet-200">
              Your trusted platform for finding and renting homes securely, easily, and quickly.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-violet-300">Home</a></li>
            <li><a href="/properties" className="hover:text-violet-300">Properties</a></li>
            <li><a href="/about" className="hover:text-violet-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-violet-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail size={16} /> support@myrentalhub.com</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Hyderabad, India</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div data-aos="fade-left">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-violet-300"><Facebook size={20} /></a>
            <a href="#" className="hover:text-violet-300"><Twitter size={20} /></a>
            <a href="#" className="hover:text-violet-300"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-violet-800 pt-6 text-center text-sm text-violet-300" data-aos="fade-up">
        &copy; {new Date().getFullYear()} MyRentalHub. All rights reserved. Build By Pavan Vikas Nayak
      </div>
    </footer>
  );
};

export default Footer;



// import React from "react";
// import logo from "../../../assets/MyRentalHubLogoDesign3.png"
// import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
// import { motion } from "framer-motion";

// const Footer = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);
//   return (
//     <motion.footer
//       className="bg-violet-900 text-violet-100 px-6 md:px-20 py-12"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
//         {/* Brand Info */}
//         <motion.div
//           className="flex items-center space-x-4"
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <img src={logo} alt="MyRentalHub Logo" className="w-15 h-12 rounded-full" />
//           <div>
//             <h2 className="text-2xl font-bold text-white mb-1">MyRentalHub</h2>
//             <p className="text-sm text-violet-200">
//               Your trusted platform for finding and renting homes securely, easily, and quickly.
//             </p>
//           </div>
//         </motion.div>

//         {/* Quick Links */}
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="/" className="hover:text-violet-300">Home</a></li>
//             <li><a href="/properties" className="hover:text-violet-300">Properties</a></li>
//             <li><a href="/about" className="hover:text-violet-300">About Us</a></li>
//             <li><a href="/contact" className="hover:text-violet-300">Contact</a></li>
//           </ul>
//         </motion.div>

//         {/* Contact Info */}
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</li>
//             <li className="flex items-center gap-2"><Mail size={16} /> support@myrentalhub.com</li>
//             <li className="flex items-center gap-2"><MapPin size={16} /> Hyderabad, India</li>
//           </ul>
//         </motion.div>

//         {/* Social Icons */}
//         <motion.div
//           initial={{ x: 50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-violet-300"><Facebook size={20} /></a>
//             <a href="#" className="hover:text-violet-300"><Twitter size={20} /></a>
//             <a href="#" className="hover:text-violet-300"><Instagram size={20} /></a>
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom */}
//       <motion.div
//         className="mt-12 border-t border-violet-800 pt-6 text-center text-sm text-violet-300"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//       >
//         &copy; {new Date().getFullYear()} MyRentalHub. All rights reserved. Build By Pavan Vikas Nayak
//       </motion.div>
//     </motion.footer>
//   );
// };

// export default Footer;
