import React from 'react';
import { useEffect } from 'react';
import Application from '../components/Credit/Application';
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
      <Application />
      <Footer />
    </div>
  );
};

export default Credit;
