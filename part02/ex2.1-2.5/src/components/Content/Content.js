import React from 'react';
import './Content.css';

const Part = ({ part, noOfExercises }) => (
  <p>
    {part}: <em>{noOfExercises}</em>
  </p>
);

const Content = (props) => (
  <>
    <Part part={props.part1} noOfExercises={props.exercises1} />
    <Part part={props.part2} noOfExercises={props.exercises2} />
    <Part part={props.part3} noOfExercises={props.exercises3} />
  </>
);

export default Content;
