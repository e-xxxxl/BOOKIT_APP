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
      
    </Routes>
  );
};

export default App;
