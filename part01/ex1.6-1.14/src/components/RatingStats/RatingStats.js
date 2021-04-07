import React from 'react';
import './RatingStats.css';

const RatingStats = ({ text, value }) => {
  return (
    <span>
      {text}: <i>{value}</i>
    </span>
  );
};

export default RatingStats;
