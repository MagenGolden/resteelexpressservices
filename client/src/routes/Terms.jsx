import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TermsHeader from '../components/Extra/TermsHead';
import '../components/Extra/extra.scss';

const Terms = () => {

  useEffect(() => {
	  window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <TermsHeader />
      <main>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
