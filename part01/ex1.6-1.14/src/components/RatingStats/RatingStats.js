import React from 'react';

const RatingStats = ({ text, totalFeedback }) => {
  return (
    <span>
      {text}: {totalFeedback}
    </span>
  );
};

export default RatingStats;
