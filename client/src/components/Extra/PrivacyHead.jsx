import React from 'react';
import '../header.scss';
import PrivacyImg from '../../assets/extra.jpg';

const PrivacyHead = () => {

  return (
    <header>
      <img src={PrivacyImg} alt="" />
      <div className='accTxt'>
        <div className='title'>
          <h1>Privacy Policy &emsp;&emsp;</h1>
        </div>
      </div>
    </header>
  );
};

export default PrivacyHead;
