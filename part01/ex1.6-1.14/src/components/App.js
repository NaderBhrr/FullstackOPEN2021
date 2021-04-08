import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import RatingButton from './RatingButton/RatingButton';
import RatingStats from './RatingStats/RatingStats';
import NavBar from './NavBar/NavBar';
import Table from './Table/Table';

const App = () => {
  const [goodRate, setGoodRate] = useState(0);
  const [badRate, setBadRate] = useState(0);
  const [neutralRate, setNeutralRate] = useState(0);

  const totalFeedback = goodRate + neutralRate + badRate;
  const averageScore =
    totalFeedback === 0
      ? 0
      : (goodRate * 1 + neutralRate * 0 + badRate * -1) / totalFeedback;

  const positiveFeedback = totalFeedback === 0 ? 0 : goodRate / totalFeedback;

  const handleFeedback = (ratingText) => (_event) =>
    ratingText === 'Good'
      ? setGoodRate(goodRate + 1)
      : ratingText === 'Neutral'
      ? setNeutralRate(neutralRate + 1)
      : ratingText === 'Bad'
      ? setBadRate(badRate + 1)
      : null;

  return (
    <>
      <NavBar />
      <main className='App '>
        <Header text='Give Feedback' />
        <span className='buttons'>
          <RatingButton
            text='Good'
            handleRatingsStats={handleFeedback('Good')}
          />
          <RatingButton text='Neutral' />
          <RatingButton text='Bad' />
        </span>
        <span>{totalFeedback ? null : `No feedback is given yet`}</span>
        <section className={totalFeedback ? 'rating-stats' : 'hidden'}>
          <Header text='Statistics' />
          <div className=''>
            <RatingStats text='Good' value={goodRate} />
            <RatingStats text='Neutral' value={neutralRate} />
            <RatingStats text='Bad' value={badRate} />
            <RatingStats text='Total Feedback' value={totalFeedback} />
            <RatingStats text='Average' value={averageScore} />
            <RatingStats text='Positive Feedback' value={positiveFeedback} />
          </div>
        </section>
        <Table
          goodRate={goodRate || 0}
          neutralRate={neutralRate || 0}
          badRate={badRate || 0}
          averageScore={averageScore || 0}
        />
      </main>
    </>
  );
};

export default App;
