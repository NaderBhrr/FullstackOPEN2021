import React from 'react';

const Total = (props) => (
  <p>
    Number of exercises:{' '}
    {Object.keys(props).reduce((total, value) => total + props[value], 0)}
  </p>
);

export default Total;
