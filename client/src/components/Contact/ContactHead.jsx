import React from 'react';
import '../header.scss';
import ContactImg from '../../assets/contact.jpg';

const ContactHead = () => {

  return (
    <header>
    <img src={ContactImg} alt="" />
    <div className='accTxt'>
      <div className='title extra'>
        <h1>Get in Touch!</h1>
      </div>
    </div>
    </header>
  );
};

export default ContactHead;
