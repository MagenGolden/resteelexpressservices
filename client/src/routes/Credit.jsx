import React from 'react';
import { useEffect } from 'react';
import CreditApp from '../components/Credit/CreditApp';
import CredHead from '../components/Credit/CredHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Credit = () => {

useEffect (() => {
  window.scrollTo(0, 0);
},[])

  return (
    <div>
      <Navbar />
      <CredHead />
      <CreditApp />
      <Footer />
    </div>
  );
};

export default Credit;
