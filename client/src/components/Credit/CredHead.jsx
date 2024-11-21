import React from 'react';
import '../header.scss';
import CreditImg from '../../assets/credit.jpg';

const CredHead = () => {

  return (
    <header>
      <img src={CreditImg} alt="Rebar tied in a grid" />
      <div className='accTxt'>
        <div className='title extra'>
          <h1>Credit Application</h1>
        </div>
      </div>
    </header>
  );
};


export default CredHead;
