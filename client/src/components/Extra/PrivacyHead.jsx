import React from 'react';
import '../header.scss';
import PrivacyImg from '../../assets/extra.jpg';

const PrivacyHead = () => {

  return (
    <header>
      <img src={PrivacyImg} alt="" />
      <div className='accTxt'>
        <div className='title extra'>
          <h1>Privacy Policy</h1>
        </div>
      </div>
    </header>
  );
};

export default PrivacyHead;
