import React from 'react';
import '../header.scss';
import ProjectImg from '../../assets/newproject.jpg';


const ProjectHeader = () => {

  return (
    <header>
      <img src={ProjectImg} alt="Rebar tied in a grid" />
      <div className='accTxt'>
        <div className='title extra'>
          <h1>New Project</h1>
        </div>
      </div>
    </header>

  );
};

export default ProjectHeader;
