import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
import './navbar.scss';
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
        {click ? (<FaTimes size='40' />) : (<FaBars size='40' />) }
      </div>

    <nav className={click ? 'navAct' : 'nav'}>
      <img style={{display: click ? 'none' : 'block'}} onClick={logoClick} src={logo} alt="Re-Steel Express Services, Inc" />
      <ul>
        <li className='hvr-overline-from-center'><NavLink to='/'>HOME</NavLink></li>
        <li onFocus={() => setProductHidden(false)} onMouseEnter={() => setProductHidden(false)} onMouseLeave={() => setProductHidden(true)} className='hvr-overline-from-center'><NavLink to='/products' className='link'>PRODUCTS</NavLink>
          <ul className='products' style={{ display: productHidden ? 'none' : 'block' }} >
            <li><NavLink to='/rebar'>REBAR</NavLink></li>
            <li onBlur={() => setProductHidden(true)}><NavLink to='/accessories'>ACCESSORIES</NavLink></li>
          </ul>
        </li><FaAngleDown className='arrow' size='20' style={{color: productHidden ? 'white' : 'red' }} />
        <li className='hvr-overline-from-center'><NavLink to='/services'>SERVICES</NavLink></li>
        <li className='hvr-overline-from-center'><NavLink to='/get-a-quote'>GET A QUOTE</NavLink></li>
        <li className='hvr-overline-from-center'><NavLink to='/meet-the-team'>MEET THE TEAM</NavLink></li>
        <li onFocus={() => setContactHidden(false)} onMouseEnter={() => setContactHidden(false)} onMouseLeave={() => setContactHidden(true)} className='hvr-overline-from-center'><NavLink to='/contact' className='link'>CONTACT US</NavLink>
          <ul className='contact' style={{ visibility: contactHidden ? 'hidden' : 'visible' }}>
            <li><NavLink to='/credit-application'>CREDIT APPLICATION</NavLink></li>
            <li><NavLink to='/new-project'>NEW PROJECT</NavLink></li>
            <li onBlur={() => setContactHidden(true)}><NavLink to='/job-openings'>JOB OPENINGS</NavLink></li>
          </ul>
        </li><FaAngleDown className='arrow' size='20' style={{color: contactHidden ? 'white' : 'red' }} />
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
