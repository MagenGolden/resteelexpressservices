import React from 'react';
import { useEffect } from 'react';
import AccHeader from '../components/Accessories/AccHeader.jsx';
import Navbar from '../components/Navbar.jsx';
import DataSheets from '../components/Accessories/DataSheets.jsx';
import Footer from '../components/Footer.jsx';

const Accessories = () => {

 useEffect(() => {
   window.scrollTo(0, 0);
 },[])

  return (
    <div>
      <Navbar />
      <AccHeader />
      <DataSheets />
      <Footer />
    </div>
  );
};

export default Accessories;
