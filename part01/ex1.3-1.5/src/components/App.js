import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Total from './Total/Total';
import './App.css';

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ];

  return (
    <div className='App'>
      <Header courseTitle={course} />
      <main>
        <article>
          <p>
            <strong>Course Information:</strong>
          </p>
          <Content parts={parts} />
          <Total
            exercises1={parts[0].exercises}
            exercises2={parts[1].exercises}
            exercises3={parts[2].exercises}
          />
        </article>
      </main>
    </div>
  );
};

export default App;
