import React from 'react';
import { useEffect } from 'react';
import JobHead from '../components/Job/JobHead.jsx';
import Navbar from '../components/Navbar.jsx';
import Apply from '../components/Job/Apply.jsx';
import Footer from '../components/Footer.jsx';
import Openings from '../components/Job/Openings.jsx';
import {EdProvider} from '../components/Job/context/EdContext';
import {StateProvider} from '../components/Job/context/StateContext';
import {WorkProvider} from '../components/Job/context/WorkContext';
import {FilesProvider} from '../components/Job/context/FilesContext';

const Job = () => {

  useEffect(() => {
	  window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <JobHead />
      <Openings />
      <StateProvider>
      <EdProvider>
      <WorkProvider>
      <FilesProvider>
        <Apply />
      </FilesProvider>
      </WorkProvider>
      </EdProvider>
      </StateProvider>
      <Footer />
    </div>
  );
};

export default Job;
