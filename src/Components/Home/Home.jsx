// // src/components/HomeCarousel.jsx
// import React, { useEffect, useState } from "react";
// import BannerSection from "./BannerSection/BannerSection";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../FirebaseConfig/config";
// import PropertyCardGrid from "./PropertyCardGrid/PropertyCardGrid";

// const Home = () => {
//   const [displayProperty, setDisplayProperty] = useState([])
  
//   useEffect(()=>{
//     const fetchProperties = async ()=>{
//       try{
//         const ownerProperties = collection(db, "Owners")
//         const allOwnerProperties = await getDocs(ownerProperties)
//         let proprtiesFromDoc = []

//         allOwnerProperties.docs.forEach((singleOwnerDoc) => {
//           const ownerData = singleOwnerDoc.data();
//           const individualProperties = ownerData.properties || [];

//           individualProperties.forEach((property) => {
//             proprtiesFromDoc.push({
//               ...property,
//               owner: {
//                 name: ownerData.name || 'Unknown',
//                 email: ownerData.email || 'Not Provided',
//               },
//             });
//           });
//         });

//         setDisplayProperty(proprtiesFromDoc);
//       }
//       catch(error){
//         console.error('Error fetching properties:', error);
//       }
//     }
//   })
//   console.log(displayProperty)
//   return (
//     <div>
//       <BannerSection propertie = {displayProperty}/>
//       <PropertyCardGrid properties={displayProperty} />
//     </div>
//   );
// };

// export default Home;


// src/components/Home.jsx or HomeCarousel.jsx
import React, { useEffect, useState } from "react";
import BannerSection from "./BannerSection/BannerSection";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfig/config";
import PropertyCardGrid from "./PropertyCardGrid/PropertyCardGrid";
import AboutBanner from "./AboutBanner/AboutBanner";
import OurServices from "./OurServices/OurServices";
import Footer from "./Footer/Footer";

const Home = () => {
  const [displayProperty, setDisplayProperty] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const ownerProperties = collection(db, "Owners");
        const allOwnerProperties = await getDocs(ownerProperties);
        let propertiesFromDoc = [];

        allOwnerProperties.docs.forEach((singleOwnerDoc) => {
          const ownerData = singleOwnerDoc.data();
          const individualProperties = ownerData.properties || [];

          individualProperties.forEach((property) => {
            propertiesFromDoc.push({
              ...property,
              owner: {
                name: ownerData.name || "Unknown",
                email: ownerData.email || "Not Provided",
              },
            });
          });
        });

        setDisplayProperty(propertiesFromDoc);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = displayProperty.filter((property) =>
    property.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <BannerSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <PropertyCardGrid properties={filteredProperties} />
      <AboutBanner />
      <OurServices />
      <Footer />
    </div>
  );
};

export default Home;






{/* <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slide2}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={slide1}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slide3}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div> */}