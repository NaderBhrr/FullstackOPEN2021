import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <header>
    <div className='MenuWrap'>
      <a href='http://thinkingDev.io/home' className='ListItem'>
        Home
      </a>
      <a href='http://thinkingDev.io/aboutUs' className='ListItem'>
        About Us
      </a>
      <a href='http://thinkingDev.io/products' className='ListItem'>
        Products
      </a>
      <a href='http://thinkingDev.io/policy' className='ListItem'>
        Policy
      </a>
      <a href='http://thinkingDev.io/contactUs' className='LastItem'>
        Contact Us
      </a>
    </div>
  </header>
);

export default NavBar;
