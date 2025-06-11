// import React from 'react'
// import './index.css';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar'
// import Footer from './Components/Footer/Footer';
// import Signup from './Pages/Signup/Signup';
// import Login from './Pages/Login/Login';
// import Home from './Components/Home/Home';
// import OwnerDashBoards from './DashBoards/OwnerDashBoards/OwnerDashBoards';
// import AddProperty from './DashBoards/OwnerDashBoards/AddProperty/AddProperty';
// import MyProperty from './DashBoards/OwnerDashBoards/MyProperty/MyProperty';
// import RentalDashBoards from './DashBoards/RentalDashBoards/RentalDashBoards';
// import About from './Components/About/AboutComponent';
// import PropertyDetails from './DashBoards/RentalDashBoards/PropertyDetails/PropertyDetails';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path='/about' element={<About />}></Route>
//         {/* <Route path='/home' element={<Home />} /> */}
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/ownerDashBoard' element={<OwnerDashBoards />} >
//           <Route path='AddProperty' element={<AddProperty />} />
//           <Route path='MyProperty' element={<MyProperty />} />
//         </Route>
//         <Route path='/rentalDashBoard' element={<RentalDashBoards />}></Route>
//         <Route path="/property/:ownerId/:propertyId" element={<PropertyDetails />} />
//       </Routes>
//       {/* <Footer /> */}
//     </div>
//   )
// }

// export default App


import React from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Home from './Components/Home/Home';
import OwnerDashBoards from './DashBoards/OwnerDashBoards/OwnerDashBoards';
import AddProperty from './DashBoards/OwnerDashBoards/AddProperty/AddProperty';
import MyProperty from './DashBoards/OwnerDashBoards/MyProperty/MyProperty';
import RentalDashBoards from './DashBoards/RentalDashBoards/RentalDashBoards';
import About from './Components/About/AboutComponent';
import PropertyDetails from './DashBoards/RentalDashBoards/PropertyDetails/PropertyDetails';
// import PropertiesDisplay from './Components/PropertiesDisplay/PropertiesDisplay';
import PropertiesDisplay from './DashBoards/RentalDashBoards/PropertiesDisplay/PropertiesDisplay';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Default route redirects to home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          
          {/* Main routes */}
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/properties' element={<PropertiesDisplay />} />
          
          {/* Owner dashboard nested routes */}
          <Route path='/ownerDashBoard' element={<OwnerDashBoards />}>
            <Route index element={<Navigate to="MyProperty" replace />} />
            <Route path='AddProperty' element={<AddProperty />} />
            <Route path='MyProperty' element={<MyProperty />} />
          </Route>
          
          {/* Rental dashboard */}
          <Route path='/rentalDashBoard' element={<RentalDashBoards />} />
          
          {/* Property details with proper parameter handling */}
          <Route 
            path="/property/:ownerId/:propertyId" 
            element={<PropertyDetails />} 
          />
          
          {/* Fallback route for 404 */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;