import React from 'react';
import Layout from './Components/Home/Layout/Layout';
import Landing from './Components/Home/Landing/Landing';
import {  Route, Routes } from 'react-router-dom';
import Signin from './Components/Auth/Signin/Signin';
import Signup from './Components/Auth/SignUp/SignUp';
import Layoutdash from './Components/Dashboard/Layoutdash';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/404/Notfound';
import Hoteldetails from './Components/Hotels/Hoteldetails';
import TopNavbar from './Components/Hotels/TopNavbar';
import TopHotels from './Components/Hotels/TopHotels';
import About from './Components/About us/About';
import Contact from './Components/Contact/Contact';
import Kingroom from './Components/Payments/Hilton/Kingroom';
import Royalroom from './Components/Payments/Hilton/Royalroom';
import DoubleRoom from './Components/Payments/Hilton/DoubleRoom';
import Classicroom from './Components/Payments/Nest/Classicroom';
import Imperialroom from './Components/Payments/Nest/Imperialroom';
import Presidentialroom from './Components/Payments/Nest/Presidentialroom';
import Classicsuite from './Components/Payments/Eko/Classicsuite'
import Studiosuite from './Components/Payments/Eko/Studiosuite'
import Atlanticsuite from './Components/Payments/Eko/Atlanticsuite'
const App = () => {
  return (
    
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<Layout />}>

        <Route index element={<Landing />} />

        <Route path="user/signup" element={<Signup />} />
        <Route path="user/signin" element={<Signin />} />
      </Route>

      <Route path="/user/dashboard" element={<Layoutdash />}>
        <Route index element={<Dashboard />} /> 
      </Route>
      <Route path="/user/about" element={<About/>}>
        <Route index element={<About />} /> 
      </Route>
      <Route path="/user/contact" element={<Contact/>}>
        <Route index element={<Contact/>} /> 
      </Route>

      <Route path="/user/hotels" element={<TopNavbar />}>
        <Route index element={<TopHotels />} /> 
        <Route path="/user/hotels/:hotelid" element={<Hoteldetails />} />
      </Route>

      <Route path="/user/hotels/king-room/payments" element={<Kingroom/>}/> 
      <Route path="/user/hotels/doyal-room/payments" element={<Royalroom/>}/> 
      <Route path="/user/hotels/double-room/payments" element={<DoubleRoom/>}/> 
      <Route path="/user/hotels/classic-room/payments" element={<Classicroom/>}/> 
      <Route path="/user/hotels/imperial-room/payments" element={<Imperialroom/>}/> 
      <Route path="/user/hotels/presidential-suite/payments" element={<Presidentialroom/>}/> 
      <Route path="/user/hotels/classic-eko-suite/payments" element={<Classicsuite/>} />
      <Route path="/user/hotels/studio-eko-suite/payments" element={<Studiosuite/>} />
      <Route path="/user/hotels/atlantic-eko-suite/payments" element={<Atlanticsuite/>} />
      
    </Routes>
  );
};

export default App;
