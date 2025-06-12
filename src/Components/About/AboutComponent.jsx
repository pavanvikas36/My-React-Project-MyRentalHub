// // import React, { useState } from "react";

// // const About = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //     const images = [
// //     "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// //     "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// //     "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
// //     ];

// //     const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev + 1) % images.length);
// //     };

// //     const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
// //     };


// //   const employees = [
// //     {
// //       name: "Pavan Vikas",
// //       role: "Founder & CEO",
// //       img: "https://randomuser.me/api/portraits/men/1.jpg",
// //     },
// //     {
// //       name: "Ananya Rao",
// //       role: "Lead Designer",
// //       img: "https://randomuser.me/api/portraits/women/2.jpg",
// //     },
// //     {
// //       name: "Rahul Verma",
// //       role: "Full Stack Developer",
// //       img: "https://randomuser.me/api/portraits/men/3.jpg",
// //     },
// //   ];

// //   const reviews = [
// //     {
// //       name: "Sita Sharma",
// //       comment: "MyRentalHub made renting so easy and safe!",
// //       img: "https://randomuser.me/api/portraits/women/4.jpg",
// //     },
// //     {
// //       name: "Aman Patel",
// //       comment: "Best rental experience I’ve had in years.",
// //       img: "https://randomuser.me/api/portraits/men/5.jpg",
// //     },
// //   ];

// //   const followerStats = {
// //     facebook: 1200,
// //     instagram: 3400,
// //     twitter: 980,
// //   };

// //   return (
// //     <div className="bg-violet-50 text-violet-900">
// //       {/* Banner */}
// //       <div className="bg-gradient-to-r from-violet-700 via-violet-800 to-violet-900 text-white py-16 px-6 text-center">
// //         <h1 className="text-4xl font-bold mb-4">Welcome to MyRentalHub</h1>
// //         <p className="text-lg max-w-3xl mx-auto">
// //           Connecting Renters with Trusted Properties. Your comfort and convenience is our mission.
// //         </p>
// //       </div>

// //       {/* Carousel */}
// //       <div className="relative max-w-5xl mx-auto mt-10 rounded-lg overflow-hidden shadow">
// //   <img
// //     src={images[currentSlide]}
// //     alt={`Slide ${currentSlide + 1}`}
// //     className="w-full h-64 object-cover"
// //   />
// //   <button
// //     onClick={prevSlide}
// //     className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-violet-700 text-white px-3 py-1 rounded-full hover:bg-violet-800"
// //   >
// //     ❮
// //   </button>
// //   <button
// //     onClick={nextSlide}
// //     className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-violet-700 text-white px-3 py-1 rounded-full hover:bg-violet-800"
// //   >
// //     ❯
// //   </button>
// // </div>


// //       {/* Content */}
// //       <div className="max-w-6xl mx-auto py-12 px-6">
// //         <h2 className="text-3xl font-bold mb-6">About MyRentalHub</h2>
// //         <p className="text-lg mb-10">
// //           MyRentalHub is your go-to platform for finding reliable rental properties. 
// //           Whether you’re looking for a cozy flat or a spacious home, our team is dedicated 
// //           to helping you rent with ease and confidence.
// //         </p>

// //         <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
// //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
// //           {employees.map((emp, index) => (
// //             <div key={index} className="bg-white rounded-2xl shadow p-4 text-center">
// //               <img src={emp.img} alt={emp.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
// //               <h4 className="text-xl font-medium">{emp.name}</h4>
// //               <p className="text-sm text-violet-700">{emp.role}</p>
// //             </div>
// //           ))}
// //         </div>

// //         <h3 className="text-2xl font-semibold mb-4">What Our Users Say</h3>
// //         <div className="grid sm:grid-cols-2 gap-6 mb-10">
// //           {reviews.map((review, index) => (
// //             <div key={index} className="bg-white p-6 rounded-xl shadow-md space-y-4">
// //               <div className="flex items-center gap-4">
// //                 <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full" />
// //                 <div>
// //                   <h5 className="font-medium">{review.name}</h5>
// //                 </div>
// //               </div>
// //               <p className="italic text-violet-800">"{review.comment}"</p>
// //             </div>
// //           ))}
// //         </div>

// //         <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
// //         <div className="flex flex-wrap gap-6 text-center text-lg font-medium">
// //           <div className="bg-white px-6 py-4 rounded-lg shadow text-blue-600">
// //             Facebook: {followerStats.facebook}+ Followers
// //           </div>
// //           <div className="bg-white px-6 py-4 rounded-lg shadow text-pink-600">
// //             Instagram: {followerStats.instagram}+ Followers
// //           </div>
// //           <div className="bg-white px-6 py-4 rounded-lg shadow text-sky-600">
// //             Twitter: {followerStats.twitter}+ Followers
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default About;


// import React, { useEffect, useState } from "react";
// import CountUp from "react-countup";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Footer from "../Footer/Footer";

// const images = [
//   "https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/31602311/pexels-photo-31602311/free-photo-of-charming-red-brick-suburban-home-in-daylight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/14672017/pexels-photo-14672017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// ];

// const team = [
//   {
//     name: "Pavan Vikas",
//     role: "Founder & CEO",
//     img: "https://randomuser.me/api/portraits/men/75.jpg",
//   },
//   {
//     name: "Ananya Rao",
//     role: "Lead Designer",
//     img: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
//   {
//     name: "Rahul Mehta",
//     role: "Full-stack Developer",
//     img: "https://randomuser.me/api/portraits/men/60.jpg",
//   },
// ];

// const About = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="text-violet-900">
//       {/* Banner */}
//       <div
//   className="w-full h-[500px] bg-cover bg-center flex items-center justify-center"
//   style={{
//     backgroundImage: `url('https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg')`,
//   }}
// >
//   <h1 className="text-5xl font-bold bg-violet-900/70 text-white px-6 py-3 rounded-xl shadow-lg">
//     About MyRentalHub
//   </h1>
// </div>


//       {/* Who We Are */}
//       <section className="max-w-6xl mx-auto py-16 px-6 text-center" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
//         <p className="text-lg leading-relaxed">
//           MyRentalHub is a modern digital platform created to simplify the way
//           tenants and property owners connect. We bring trust, technology, and
//           convenience into the renting experience for all.
//         </p>
//       </section>

//       {/* Mission, Vision, Values */}
//       <section className="bg-white py-10 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center" data-aos="fade-up">
//         {[
//           {
//             title: "🎯 Mission",
//             desc: "Make renting effortless, fair, and fast for everyone.",
//           },
//           {
//             title: "🌍 Vision",
//             desc: "Become India’s most trusted rental housing ecosystem.",
//           },
//           {
//             title: "💜 Values",
//             desc: "Transparency, Trust, Innovation, and Customer Delight.",
//           },
//         ].map((item, idx) => (
//           <div key={idx} className="shadow-lg p-6 rounded-lg bg-violet-50">
//             <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </section>

//       {/* Image Carousel */}
//       <div className="max-w-5xl mx-auto py-12 px-6" data-aos="fade-up">
//         <div className="relative rounded-lg overflow-hidden shadow-xl">
//           <img
//             src={images[currentImage]}
//             className="w-full h-80 object-cover transition-all duration-700"
//             alt="carousel"
//           />
//           <button
//             onClick={() =>
//               setCurrentImage((currentImage - 1 + images.length) % images.length)
//             }
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-violet-700 text-white p-2 rounded-full"
//           >
//             ‹
//           </button>
//           <button
//             onClick={() => setCurrentImage((currentImage + 1) % images.length)}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-violet-700 text-white p-2 rounded-full"
//           >
//             ›
//           </button>
//         </div>
//       </div>

//       {/* Timeline */}
//       <section className="bg-violet-50 py-14 px-6 text-center" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
//         <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto text-left">
//           <div className="bg-white rounded-lg shadow-md p-6 flex-1">
//             <h4 className="text-xl font-bold">2024</h4>
//             <p>MyRentalHub founded in Hyderabad</p>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 flex-1">
//             <h4 className="text-xl font-bold">2025</h4>
//             <p>Expanded to 3 cities with 1,000+ active listings</p>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-16 bg-white text-center px-6" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {team.map((member, i) => (
//             <div
//               key={i}
//               className="bg-violet-50 p-6 rounded-lg shadow hover:shadow-xl transition-all"
//             >
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
//               />
//               <h3 className="text-lg font-bold">{member.name}</h3>
//               <p className="text-sm text-violet-700">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="bg-violet-100 py-14 px-6 text-center" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
//         <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {[
//             { quote: "Found a flat in 2 days. Simple, smooth & secure!", name: "Ayesha" },
//             { quote: "Got 3 quality tenant applications in 1 week!", name: "Mr. Reddy" },
//             { quote: "The platform is clean and intuitive!", name: "Prateek" },
//           ].map((t, idx) => (
//             <div key={idx} className="bg-white p-6 rounded-lg shadow">
//               <p>“{t.quote}”</p>
//               <p className="mt-4 font-semibold text-sm">– {t.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Follower Count */}
//       <section className="bg-white py-14 px-6" data-aos="fade-up">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           MyRentalHub by the Numbers
//         </h2>
//         <div className="flex flex-wrap justify-center gap-10 text-center">
//           {[
//             { label: "Happy Renters", end: 5000 },
//             { label: "Verified Owners", end: 800 },
//             { label: "App Downloads", end: 10000 },
//             { label: "User Rating", end: 4.8, suffix: "/5" },
//           ].map((stat, i) => (
//             <div key={i} className="text-2xl font-semibold">
//               <div className="text-violet-700 text-4xl font-bold">
//                 <CountUp end={stat.end} duration={2.5} suffix={stat.suffix || ""} />
//               </div>
//               <p className="mt-2">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;



import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Pavan Vikas",
    role: "Founder & Developer",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Nikhil Sharma",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Ananya Rao",
    role: "Marketing Lead",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Ravi Teja",
    role: "Backend Engineer",
    image: "https://i.pravatar.cc/150?img=24",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-violet-50 min-h-screen text-black">
      {/* Top Banner */}
      <div className="bg-violet-700 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MyRentalHub</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Making property rental easier, faster, and more transparent. We connect
          homeowners and renters with just a few clicks.
        </p>
      </div>

      {/* About Section */}
      <div className="py-14 px-5 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-violet-800 mb-4">Who We Are</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          At MyRentalHub, our mission is to provide a reliable platform where users
          can find, list, and rent homes effortlessly. We value trust, convenience,
          and customer satisfaction above all.
        </p>
      </div>

      {/* Team Section */}
      <div className="bg-white py-14 px-5 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-violet-800 mb-10">Meet Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-violet-100 text-black rounded-2xl p-5 text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-violet-300"
              />
              <h3 className="text-xl font-bold text-violet-700">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-violet-700 text-white py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
        <div className="flex justify-center gap-6 text-xl">
          <a href="#" className="hover:text-violet-300 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-violet-300 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-violet-300 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-violet-300 transition"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
