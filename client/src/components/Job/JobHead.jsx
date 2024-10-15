import React from 'react';
import '../header.scss';
import JobImg from '../../assets/job.jpg';


const JobHead = () => {

  return (
    <header>
      <img src={JobImg} alt="Rebar tied in a grid" />
      <div className='accTxt'>
        <div className='title'>
          <h1>Job Openings &emsp;&emsp;&emsp;</h1>
        </div>
      </div>
    </header>

  );
};

export default JobHead;
