import React from 'react';
import './footer.scss';
import Logo from '../assets/logo.png';
import Phone from '../assets/phone.png';
import { useState, } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {

const [name, setName] = useState ('');
const [email, setEmail] = useState ('');
const [message, setMessage] = useState ('');

function logoClick() {
  location.href = '/';
}

  return (
    <footer>
      <div className='info'>
       <img src={Logo} onClick={logoClick} className='botLogo' alt="Re-Steel Express Services, INC" />
        <img src={Phone} className='botPhone' alt="" />
        <p className='phoneNum'>(601) 795-6110</p>
        <p className='email' >contat-us@resteelexpress.com</p>
        <p className='address' >9 Saw RD, Poplarville, MS 39470</p>
      </div>
      <div className='links'>
        <p><NavLink to ='/contact'>Contact Us</NavLink></p>
        <p><NavLink to ='/meet-the-team'>Meet The Team</NavLink></p>
        <p><NavLink to = '/terms-and-conditions'>Terms & Conditions</NavLink></p>
        <p><NavLink to = '/privacy-policy'>Privacy Policy</NavLink></p>
      </div>
        <form className='quick'>
          <h3>Contact Us</h3>
          <input type='text' placeholder='Name' value={name} size='10' onChange={ (e) => setName(e.target.value) } />
          <input type='email' placeholder='Email' value={email} size='15' onChange={ (e) => setEmail(e.target.value) } />
          <textarea placeholder='Message' value={message} rows="4" cols="15" onChange={ (e) => setMessage(e.target.value) } />
          <button className='footButt hvr-shrink' type='submit'>Submit</button>
        </form>
    </footer>
  );
};

export default Footer;
