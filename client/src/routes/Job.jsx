import React from 'react';
import { useEffect } from 'react';
import JobHead from '../components/Job/JobHead.jsx';
import Navbar from '../components/Navbar.jsx';
import Apply from '../components/Job/Apply.jsx';
import Footer from '../components/Footer.jsx';
import Openings from '../components/Job/Openings.jsx';

const Job = () => {

  useEffect(() => {
	  window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <JobHead />
      <Openings />
      <Apply />
      <Footer />
    </div>
  );
};

export default Job;
