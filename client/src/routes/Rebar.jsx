import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import RebarHeader from '../components/Rebar/RebarHeader.jsx';
import Icons from '../components/Rebar/Icons.jsx';
import RebarMain from '../components/Rebar/RebarMain.jsx';
import RebQuote from '../components/Rebar/RebQuote.jsx';

const Rebar = () => {

useEffect(() => {
  window.scrollTo(0, 0);
},[])

  return (
    <div>
      <Navbar />
      <RebarHeader />
      <Icons />
      <RebarMain />
      <RebQuote />
      <Footer />
    </div>
  );
};

export default Rebar;
