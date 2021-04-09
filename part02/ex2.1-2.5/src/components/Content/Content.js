import React from 'react';
import './Content.css';

const Part = (props) => {
  const { name, exercises } = props.part;
  return (
    <p>
      {name}: <em>{exercises}</em>
    </p>
  );
};

const Content = ({ course }) => (
  <>
    {course.parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

export default Content;
