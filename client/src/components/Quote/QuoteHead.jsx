import React from 'react';
import '../header.scss';
import QuoteImg from '../../assets/quote.jpg';

const QuoteHead = () => {


  return (
    <header>
      <img src={QuoteImg} alt="" />
      <div className='accTxt'>
        <div className='title extra'>
          <h1>Get a Quote</h1>
        </div>
      </div>
    </header>
  );
};

export default QuoteHead;
