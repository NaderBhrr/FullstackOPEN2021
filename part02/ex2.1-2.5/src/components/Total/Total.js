import React from 'react';
import './Total.css';

const Total = (props) => (
  <p>
    Total number of exercises:{' '}
    {props.course.parts
      .map((part) => part.exercises)
      .reduce((total, value) => total + value, 0)}
  </p>
);
export default Total;
