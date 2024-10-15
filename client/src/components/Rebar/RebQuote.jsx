import React from 'react';
import './rebarQuote.scss';
import LinkAcc from '../../assets/rebar-accessory.jpg';
import LinkSer from '../../assets/services.jpg';


const RebQuote = () => {

  return (
    <section className='rebQut'>
      <div className='getQut'>
        <h3>Contact one of our professionals to get a quote on materials.</h3><button onClick={ () => location.href='/get-a-quote' } className='rebBut hvr-shrink hvr-sweep-to-right'>GET A QUOTE</button>
      </div>
      <div className='rebLink'>
        <a href='/accessories'>
          <img className='hvr-shrink' src={LinkAcc} alt="" />
          <div className='linkTxt'>
            <p>Accessories</p>
          </div>
        </a>
        <a href='/services'>
          <img className='hvr-shrink' src={LinkSer} alt="" />
          <div className='linkTxt'>
            <p>Services</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default RebQuote;
