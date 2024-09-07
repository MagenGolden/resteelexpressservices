import React from 'react';
import '../header.scss';
import Services from '../../assets/services.jpg';

const SerHead = () => {
  return (
    <header>
      <img src={Services} alt="Rebar" />
      <div className='accTxt'>
        <div className='title'>
          <h1>Services</h1>
        </div>
        <div className='sub'>
          <h3>We offer a variety of services</h3>
          <p>Are in-house team are ready to assist you during every step of your project.</p>
        </div>
      </div>
    </header>
  );
};

export default SerHead;
