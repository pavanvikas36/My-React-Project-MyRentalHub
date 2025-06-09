import React from 'react'
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Home from './Components/Home/Home';
import OwnerDashBoards from './DashBoards/OwnerDashBoards/OwnerDashBoards';
import AddProperty from './DashBoards/OwnerDashBoards/AddProperty/AddProperty';
import MyProperty from './DashBoards/OwnerDashBoards/MyProperty/MyProperty';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/ownerDashBoard' element={<OwnerDashBoards />} >
          <Route path='AddProperty' element={<AddProperty />} />
          <Route path='MyProperty' element={<MyProperty />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
