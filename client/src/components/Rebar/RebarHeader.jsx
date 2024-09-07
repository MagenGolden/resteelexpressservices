import React from 'react';
import '../header.scss';
import RebarHead from '../../assets/Rebar_001.jpg';

const RebarHeader = () => {
  return (
    <header>
      <img src={RebarHead} alt="Rebar" />
      <div className='accTxt'>
        <div className='title'>
          <h1>Rebar</h1>
        </div>
        <div className='sub'>
          <h3>100% Domestic Steel</h3>
          <p>We carry a few different types of rebar to best suit your project.</p>
        </div>
      </div>
    </header>
  );
};

export default RebarHeader;
