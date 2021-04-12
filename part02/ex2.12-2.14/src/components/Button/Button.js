import React from 'react';

const Button = ({ text, handleAction }) => (
  <button onClick={handleAction}>{text}</button>
);

export default Button;
