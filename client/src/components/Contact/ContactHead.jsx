import React from 'react';
import '../header.scss';
import ContactImg from '../../assets/contact.jpg';

const ContactHead = () => {

  return (
    <header>
    <img src={ContactImg} alt="" />
    <div className='accTxt'>
      <div className='title'>
        <h1>Get in Touch! &emsp;&emsp;</h1>
      </div>
    </div>
    </header>
  );
};

export default ContactHead;
