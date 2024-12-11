import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import ProjectHeader from '../components/NewProject/ProjectHeader.jsx';
import ProjectForm from '../components/NewProject/ProjectForm.jsx';
import Footer from '../components/Footer.jsx';

const NewProject = () => {

 useEffect(() => {
   window.scrollTo(0, 0);
 },[])

  return (
    <div>
      <Navbar />
      <ProjectHeader />
      <ProjectForm />
      <Footer />
    </div>
  );
};

export default NewProject;
