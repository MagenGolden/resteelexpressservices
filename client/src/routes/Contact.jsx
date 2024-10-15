import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHead from '../components/Contact/ContactHead';
import ContactMain from '../components/Contact/ContactMain';


const Contact = () => {

  useEffect(() => {
	  window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <ContactHead />
      <ContactMain />
      <Footer />
    </div>
  );
};

export default Contact;
