import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Total from './Total/Total';
import './App.css';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div className='App'>
      <Header courseTitle={course} />
      <main>
        <article>
          <p>
            <strong>Course Information:</strong>
          </p>
          <Content
            part1={part1}
            exercises1={exercises1}
            part2={part2}
            exercises2={exercises2}
            part3={part3}
            exercises3={exercises3}
          />
          <Total exercises1={10} exercises2={7} exercises3={14} />
        </article>
      </main>
    </div>
  );
};

export default App;
