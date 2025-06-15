import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📩 Message submitted:", form);
    alert("Thank you for contacting us! ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-10 rounded-2xl shadow-xl">
        
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-black-800 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
            <button
              type="submit"
              className="bg-violet-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-violet-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-black-800 mb-6">Contact Information</h2>
          <ul className="space-y-4 text-black-900">
            <li className="flex items-center gap-3">
              <Phone size={20} /> <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} /> <span>support@myrentalhub.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={20} /> <span>Hyderabad, Telangana, India</span>
            </li>
          </ul>

          {/* Optional Map (static or dynamic with leaflet/google) */}
          <div className="mt-6">
            <iframe
              title="map"
              className="w-full h-48 rounded-lg border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.095041869142!2d78.48667127451857!3d17.4504117010368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b9c9c2ce67%3A0x37d85073c684bdb3!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1688473460650!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
