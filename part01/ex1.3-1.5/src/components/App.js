import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Total from './Total/Total';
import './App.css';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 },
    ],
  };

  return (
    <div className='App'>
      <Header courseTitle={course.name} />
      <main>
        <article>
          <p>
            <strong>Course Information:</strong>
          </p>
          <Content course={course} />
          <Total course={course} />
        </article>
      </main>
    </div>
  );
};

export default App;
