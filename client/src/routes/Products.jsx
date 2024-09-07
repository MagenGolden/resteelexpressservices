import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ProdHeader from '../components/Products/ProdHeader.jsx';
import ProdMain from '../components/Products/ProdMain.jsx';

const Products = () => {

 useEffect(() => {
   window.scrollTo(0, 0);
 },[])

  return (
    <div>
      <Navbar />
      <ProdHeader />
      <ProdMain />
      <Footer />
    </div>
  );
};

export default Products;
