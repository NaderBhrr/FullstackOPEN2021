import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <header>
    <div className='MenuWrap'>
      <a href='#' className='ListItem'>
        Home
      </a>
      <a href='#' className='ListItem'>
        About Us
      </a>
      <a href='#' className='ListItem'>
        Products
      </a>
      <a href='#' className='ListItem'>
        Policy
      </a>
      <a href='#' className='LastItem'>
        Contact Us
      </a>
    </div>
  </header>
);

export default NavBar;
