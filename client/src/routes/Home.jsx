import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import HomeHeader from '../components/Home/HomeHeader.jsx';
import Welcome from '../components/Home/Welcome.jsx';
import ProductsServices from '../components/Home/ProductsServices.jsx';
import Guarantee from '../components/Home/Guarantee.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {

 useEffect(() => {
   window.scrollTo(0, 0);
 },[])

  return (
    <div>
      <Navbar />
      <HomeHeader />
      <Welcome />
      <ProductsServices />
      <Guarantee />
      <Footer />
    </div>
  );
};

export default Home;
