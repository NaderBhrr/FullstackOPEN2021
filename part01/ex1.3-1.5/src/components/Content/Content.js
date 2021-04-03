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

const Content = (props) => (
  <>
    <Part part={props.course.parts[0]} />
    <Part part={props.course.parts[1]} />
    <Part part={props.course.parts[2]} />
  </>
);

export default Content;
