import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SerHead from '../components/Services/SerHead.jsx';
import SerMain from '../components/Services/SerMain.jsx';

const Services = () => {

  useEffect(() => {
  window.scrollTo(0, 0);
},[])

  return (
    <div>
      <Navbar />
      <SerHead />
      <SerMain />
      <Footer />
    </div>
  );
};

export default Services;
