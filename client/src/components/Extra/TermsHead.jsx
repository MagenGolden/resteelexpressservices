import React from 'react';
import '../header.scss';
import TermsImg from '../../assets/extra.jpg';

const TermsHead = () => {

  return (
    <header>
      <img src={TermsImg} alt="" />
      <div className='accTxt'>
        <div className='title'>
          <h1>Terms & Conditions &emsp;&emsp;</h1>
        </div>
      </div>
    </header>
  );
};

export default TermsHead;
