import React, { useState, useEffect } from "react";

const carouselImages = [
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
];

const AboutBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text section */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-black-800">About MyRentalHub</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            MyRentalHub is your trusted partner for finding the perfect rental home. We help renters connect with verified property owners to ensure a smooth and secure renting experience. Browse from a wide range of locations, price ranges, and amenities to find the property that suits you best.
          </p>
          <p className="text-gray-600">
            Join thousands of happy renters who found their dream homes with us.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`carousel-${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full ${
                  currentImage === index ? "bg-violet-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
