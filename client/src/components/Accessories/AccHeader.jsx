import React from 'react';
import '../header.scss';
import HeadImg from '../../assets/rebar-accessory.jpg';

const Header = () => {
  return (
    <header>
      <img src={HeadImg} alt="Rebar tied in a grid" />
      <div className='accTxt'>
        <div className='title'>
          <h1>Rebar Supports</h1><h1>and Accessories</h1>
        </div>
        <div className='sub'>
          <h3>All your needs from start to finish</h3>
          <p>We sell supports and accessories in addition to the rebar you will</p><p>need for your project so you can get all your materials from one place.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
