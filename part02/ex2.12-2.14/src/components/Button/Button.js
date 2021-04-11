import React from 'react';

const Button = ({ text, startSearch }) => (
  <button onClick={startSearch}>{text}</button>
);

export default Button;
