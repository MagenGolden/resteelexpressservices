import React, { useState, } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
import './navbar.scss';
import '../../node_modules/hover.css/css/hover.css';
import logo from '../assets/logo.png';
import phone from '../assets/phone.png';

const Navbar = () => {

  function logoClick() {
    location.href = "/";
  }

const [productHidden, setProductHidden] = useState(true);
const [contactHidden, setContactHidden] = useState(true);
const [click, setClick] = useState(false);

  function menuClick() {
    setClick(!click);
  }


  return (
    <>
      <div className='ham' onClick={menuClick}>
        {click ? (<FaTimes size='30' />) : (<FaBars size='30' />) }
      </div>

      <nav className={click ? 'navAct' : 'nav'}>
        <img onClick={logoClick} src={logo} alt="Re-Steel Express Services, Inc" />
        <ul>
          <li className='hvr-overline-from-center'><NavLink to='/'>HOME</NavLink></li>
    <li onMouseEnter={() => setProductHidden(false)} onMouseLeave={() => setProductHidden(true)} className='hvr-overline-from-center'><NavLink to='/products'>PRODUCTS</NavLink>
      <ul className='products' style={{ display: productHidden ? 'none' : 'block' }} >
        <li><NavLink to='/rebar'>REBAR</NavLink></li>
        <li><NavLink to='/accessories'>ACCESSORIES</NavLink></li>
      </ul>
    </li><FaAngleDown className='arrow' size='20' style={{color: productHidden ? 'white' : 'red' }} />
    <li className='hvr-overline-from-center'><NavLink to='/services'>SERVICES</NavLink></li>
    <li className='hvr-overline-from-center'><NavLink to='/get-a-quote'>GET A QUOTE</NavLink></li>
    <li className='hvr-overline-from-center'><NavLink to='/meet-the-team'>MEET THE TEAM</NavLink></li>
    <li onMouseEnter={() => setContactHidden(false)} onMouseLeave={() => setContactHidden(true)} className='hvr-overline-from-center'><NavLink to='/contact'>CONTACT US</NavLink>
      <ul className='contact' style={{ display: contactHidden ? 'none' : 'block' }}>
        <li><NavLink to='/credit-application'>CREDIT APPLICATION</NavLink></li>
        <li><NavLink to='/job-openings'>JOB OPENINGS</NavLink></li>
      </ul>
    </li><FaAngleDown className='arrow' size='20' style={{color: contactHidden ? 'white' : 'red' }} />
    </ul>
    <div className='phone' style={{ display: contactHidden ? 'flex' : 'none' }}> <img src={phone} alt="call" /> (601) 795 6110</div>
    </nav>
    </>
  );
};

export default Navbar;
