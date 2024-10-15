import React from 'react';
import { useEffect } from 'react';
import JobHead from '../components/Job/JobHead.jsx';
import Navbar from '../components/Navbar.jsx';
import JobApp from '../components/Job/JobApp.jsx';
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
      <JobApp />
      <Footer />
    </div>
  );
};

export default Job;
