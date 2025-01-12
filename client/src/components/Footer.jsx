import React from 'react';
import './footer.scss';
import Logo from '../assets/logo.png';
import Phone from '../assets/phone.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import api from './api';

const Footer = () => {

  const[sending, setSending] = useState(false);

  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [message, setMessage] = useState ('');
  const [b0Spm, setB0Spm] = useState('');
  const buttonText = sending ? 'Sending...' : 'Submit';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {name, email, message};
    if (!b0Spm) {
    try {
      setSending(true);
      const response = await api.post('/contact', userInfo);
      console.log(response);
      if (response.data.status === 'success') {
        alert(
          'Great! Your from has been sent! We will get back to you soon!'
        );
        setSending(false);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Opps. Something went wrong. Please try again.');
      }
      setSending(false);
    } catch (err) {
      console.log(err);
    }
    } else {
      window.location.reload();
    }
  };

  function logoClick() {
    location.href = '/';
}

  return (
    <footer>
      <div className='info'>
        <img src={Logo} onClick={logoClick} className='botLogo' alt="Re-Steel Express Services, INC" />
        <div className='phone'>
          <img src={Phone} className='botPhone' alt="" />
          <p className='phoneNum'>(601) 795-6110</p>
        </div>
        <p className='email' >contat-us@resteelexpress.com</p>
        <p className='address' >9 Saw RD, Poplarville, MS 39470</p>
      </div>
      <div className='links'>
        <p><NavLink to ='/contact'>Contact Us</NavLink></p>
        <p><NavLink to ='/meet-the-team'>Meet The Team</NavLink></p>
        <p><NavLink to = '/terms-and-conditions'>Terms & Conditions</NavLink></p>
        <p><NavLink to = '/privacy-policy'>Privacy Policy</NavLink></p>
      </div>
      <form className='quick' onSubmit={handleSubmit}>
        <h3>Contact Us</h3>
        <input name='conb0Spm' type='text' placeholder='Last Name' value={b0Spm} size='10' onChange={ (e) => setB0Spm(e.target.value) } style={{display: 'none'}}/>
        <input name='conName' type='text' required placeholder='Name' value={name} size='10' onChange={ (e) => setName(e.target.value) } />
        <input name='conEmail' type='email' required placeholder='Email' value={email} size='15' onChange={ (e) => setEmail(e.target.value) } />
        <textarea name='conMess' required placeholder='Message' value={message} rows="4" cols="15" onChange={ (e) => setMessage(e.target.value) } />
        <button className='footButt hvr-shrink' type='submit'>{buttonText}</button>
      </form>
    </footer>
  );
};

export default Footer;
