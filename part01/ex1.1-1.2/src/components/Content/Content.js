import React from 'react';

const Part = ({ part, noOfExercises }) => (
  <p>
    {part} {noOfExercises}
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
