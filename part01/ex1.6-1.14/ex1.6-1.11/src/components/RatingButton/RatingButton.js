import React from 'react';
import './RatingButton.css';

const RatingButton = ({ text, handleRatingsStats }) => (
  <button onClick={handleRatingsStats}>{text}</button>
);

export default RatingButton;
