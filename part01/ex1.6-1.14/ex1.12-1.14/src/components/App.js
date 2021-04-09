import React, { useState } from 'react';
import Button from './Button/Button';
import Header from './Header/Header';
import './App.css';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ];

  const [anecdoteIndex, setAnecdoteIndex] = useState(0);
  const [anecdoteVotes, setAnecdoteVotes] = useState({});

  const createRandomNumber = (array) =>
    Math.floor(Math.random() * array.length);

  const displayAnecdote = (event) => {
    if (event.target.nodeType === 1) {
      setAnecdoteIndex(createRandomNumber(anecdotes));
    }
  };

  // Is an object a better choice for state?
  const upvoteAnecdote = (_event) => {
    !anecdoteVotes.hasOwnProperty(anecdoteIndex)
      ? setAnecdoteVotes({
          ...anecdoteVotes,
          [anecdoteIndex]: [1, anecdotes[anecdoteIndex]],
        })
      : setAnecdoteVotes({
          ...anecdoteVotes,
          [anecdoteIndex]: [
            anecdoteVotes[anecdoteIndex][0] + 1,
            anecdotes[anecdoteIndex],
          ],
        });
  };

  return (
    <div className='App'>
      <Header text='Anecdote of the Day' />
      <span className='anecdote-text'>
        {anecdotes[anecdoteIndex ? anecdoteIndex : 0]}
      </span>
      <p>
        The above anecdote has{' '}
        {anecdoteVotes[anecdoteIndex] ? anecdoteVotes[anecdoteIndex][0] : 0}{' '}
        votes
      </p>
      <div className='buttons'>
        <Button buttonText='Display Anecdote' handleClick={displayAnecdote} />
        <Button buttonText='Vote for Anecdote' handleClick={upvoteAnecdote} />
      </div>
      <Header text='Anecdote with Most Votes' />
      <span>
        {Object.keys(anecdoteVotes).length === 0
          ? null
          : Object.entries(anecdoteVotes)
              .map(([_key, value]) => value)
              .sort((a, b) => b[0] - a[0])[0][1]}
      </span>
    </div>
  );
};

export default App;
