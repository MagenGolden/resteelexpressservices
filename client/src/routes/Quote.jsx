import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteHead from '../components/Quote/QuoteHead';
import QuoteForm from '../components/Quote/QuoteForm';

const Quote = () => {

  useEffect(() => {
	  window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <QuoteHead />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Quote;
