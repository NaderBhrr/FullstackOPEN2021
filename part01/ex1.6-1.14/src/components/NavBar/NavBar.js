import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <header>
    <div class='MenuWrap'>
      <a href='#' class='ListItem'>
        Home
      </a>
      <a href='#' class='ListItem'>
        About Us
      </a>
      <a href='#' class='ListItem'>
        Products
      </a>
      <a href='#' class='ListItem'>
        Policy
      </a>
      <a href='#' class='LastItem'>
        Contact Us
      </a>
    </div>
  </header>
);

export default NavBar;
