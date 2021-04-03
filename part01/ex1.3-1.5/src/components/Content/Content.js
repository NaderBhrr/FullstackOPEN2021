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
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
  </>
);

export default Content;
