import React, { useEffect, useState } from "react";
import { Home, ShieldCheck, MapPin, Star, Users } from "lucide-react";

const services = [
  {
    title: "Verified Rental Listings",
    description: "Explore genuine properties from trusted owners. Each listing is verified to ensure security and authenticity.",
    icon: <ShieldCheck className="w-10 h-10 text-violet-700" />,
  },
  {
    title: "Find Homes Near You",
    description: "Browse rentals based on your location or preferred city using our integrated map search.",
    icon: <MapPin className="w-10 h-10 text-violet-700" />,
  },
  {
    title: "Secure Booking System",
    description: "Book your rental property confidently through our streamlined and safe system.",
    icon: <Home className="w-10 h-10 text-violet-700" />,
  },
];

const OurServices = () => {
  const [reviews, setReviews] = useState(1);
  const [followers, setFollowers] = useState(1);

  const randomReviews = Math.floor(Math.random() * 3000) + 1000; // 1000–3999
  const randomFollowers = Math.floor(Math.random() * 7000) + 5000; // 5000–11999

  useEffect(() => {
    let reviewCount = 1;
    let followerCount = 1;

    const reviewInterval = setInterval(() => {
      reviewCount++;
      setReviews(reviewCount);
      if (reviewCount >= randomReviews) clearInterval(reviewInterval);
    }, 1);

    const followerInterval = setInterval(() => {
      followerCount++;
      setFollowers(followerCount);
      if (followerCount >= randomFollowers) clearInterval(followerInterval);
    }, 1);

    return () => {
      clearInterval(reviewInterval);
      clearInterval(followerInterval);
    };
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-black-800 mb-4">
          What We Offer
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
          At <strong>MyRentalHub</strong>, we provide smart, safe, and easy-to-use solutions for your rental journey.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition text-left">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-black-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Animated Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-black-800 text-xl font-semibold">
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6" /> {reviews.toLocaleString()}+ Reviews
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6" /> {followers.toLocaleString()}+ Followers
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
