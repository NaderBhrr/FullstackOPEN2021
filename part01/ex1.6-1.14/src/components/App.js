import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import RatingButton from './RatingButton/RatingButton';
import RatingStats from './RatingStats/RatingStats';
const App = () => {
  const [goodRate, setGoodRate] = useState(0);
  const [badRate, setBadRate] = useState(0);
  const [neutralRate, setNeutralRate] = useState(0);
  return (
    <>
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
      <main className='App'>
        <Header text='Give Feedback' size={4} />
        <span className='buttons'>
          <RatingButton text='Good' />
          <RatingButton text='Neutral' />
          <RatingButton text='Bad' />
        </span>
        <section className='rating-stats'>
          <Header text='Statistics' />
          <RatingStats text='Good' totalFeedback={6} />
          <RatingStats text='Neutral' totalFeedback={6} />
          <RatingStats text='Bad' totalFeedback={6} />
        </section>
      </main>
    </>
  );
};

export default App;
