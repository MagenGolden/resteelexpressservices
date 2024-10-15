import React from 'react';
import './guarantee.scss';
import Building from '../../assets/aerial.jpg';

const Guarantee = () => {
  return (
    <section className='team'>
      <div className='teamtxt'>
        <h3>The Re-Steel Express Guarantee</h3>
        <p>When working with us, you can count on quality services that put your needs first. We will do everything we can to provide you with a quality product within a reasonable timeframe and manage your expectations from time of fabrication to shipping. Our in-house detailers are always available to answer your concerns and assure you that your project is being handled efficiently.</p>
        <button onClick={ () => location.href='/meet-the-team' } className='teambutt hvr-shrink'>Meet The Team</button>
      </div>
      <img src={Building} alt="Re-Steel Express" />
    </section>
  );
};

export default Guarantee;

