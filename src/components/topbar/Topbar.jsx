import React, { useState, useRef } from 'react';
import './topbar.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'

const Topbar = ({ backOpen, setBackOpen, menuOpen, setMenuOpen }) => {
  const lottieRef = useRef(null);

  const handleClick = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };

  
  const [isOpen, setOpen] = useState(false);
  
  

  return (
    <div className={` topbar ${backOpen ? 'active' : ''}`} id='topbar'>
      <div className="topbar-cont">
        <Link className='topbar-cont-contact2' to='/'>
          <div className=" topbar-container">
            <div className="leftComp " onClick={handleClick}>
              <img src="assests/restaurant.png" alt="" />
            </div>
            {/* <h2 className=' topbar-cont-tavola'>Tavola </h2> */}
          </div>
        </Link>

        <div className="topbar-cont2">
          <Link className='topbar-cont-contact' to='/menu'>
            <p className='topbar-cont-contact '> Menu</p></Link>
          <Link className='topbar-cont-contact' to='/about'>
            <p className='topbar-cont-contact '> About</p></Link>
          <Link className='topbar-cont-contact' to='/services'>
            <p className='topbar-cont-contact '> Services</p></Link>
          <Link className='topbar-cont-contact' to='/contact'>
            <p className='topbar-cont-contact '> Contact </p></Link>



        </div>


        <div className="topbar-cont3">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>



      </div>



      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>

        <Link className='topbar-cont-contact' to='/menu' >Menu</Link>
        <Link className='topbar-cont-contact' to='/about'>About</Link>
        <Link className='topbar-cont-contact' to='/services'>Services</Link>
        <Link className='topbar-cont-contact' to='/contact'>Contact</Link>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Topbar;
