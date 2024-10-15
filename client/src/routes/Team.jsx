import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamHeader from '../components/Team/TeamHeader';
import TeamMain from '../components/Team/TeamMain';


const Team = () => {

  useEffect(() => {
	  window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <TeamHeader />
      <TeamMain />
      <Footer />
    </div>
  );
};

export default Team;
