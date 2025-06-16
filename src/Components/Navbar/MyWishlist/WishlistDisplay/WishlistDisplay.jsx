import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WishlistDisplay = ({ myWishlist, handleDelete }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [myWishlist]);

  const handleBookNow = (property) => {
    navigate('/propertydetails', { state: { selectedProperty: property } });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black-800 mb-6 text-center">My Wishlist</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-violet-400 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : myWishlist.length === 0 ? (
        <p className="text-center text-gray-600">No properties in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {myWishlist.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-black truncate">{item.title}</h3>
                <p className="text-gray-700 mb-1">₹{item.rent}</p>
                <p className="text-sm text-gray-500">📧 {item.ownerEmail}</p>
                <p className="text-sm text-gray-500 mb-2">📞 {item.ownerNum}</p>
              </div>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleDelete(item.propertyId)}
                  className="flex-1 bg-red-500 text-white py-1 px-2 text-sm rounded-md hover:bg-red-600 transition"
                >
                  ❌ Remove
                </button>
                <button
                  onClick={() => handleBookNow(item)}
                  className="flex-1 bg-violet-600 text-white py-1 px-2 text-sm rounded-md hover:bg-violet-700 transition"
                >
                  🏠 Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistDisplay;
