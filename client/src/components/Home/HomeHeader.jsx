import React from 'react';
import './homeHeader.scss';
import Resteel from '../../assets/homepage.jpg';

const Header = () => {

  return (
    <header className='home'>
      <img src={Resteel}  alt="Re-Steel Express Services, Inc" />
      <section className='imgTxt'>
        <h3>Custom Rebar Fabrication</h3>
        <hr />
        <h3>&emsp;&emsp;&emsp;&emsp;&emsp;Quality, Friendly Service</h3>
        <br />
        <p>AMERICAN-MADE STEEL. REBAR THAT COMES WITH PEACE OF MIND.</p>
      </section>
      <button className='homebut hvr-shrink hvr-shutter-out-horizontal' onClick={ () => location.href = '/contact' } >GET IN TOUCH!</button>
    </header>

  );
};

export default Header;
