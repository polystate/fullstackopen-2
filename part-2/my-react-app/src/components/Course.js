import React from "react";

const Header = ({ course }) => <h1>{course}</h1>;

const Content = (props) => {
  return (
    <>
      {props.part.map((prop) => (
        <p key={prop.id}>
          {prop.name} {prop.exercises}
        </p>
      ))}
    </>
  );
};

const Total = ({ sum }) => {
  return (
    <p>
      <b>total of {sum} exercises</b>
    </p>
  );
};

const Course = (props) => {
  const { name, parts } = props.course;
  const numExercises = parts
    .map((part) => part.exercises)
    .reduce(function (a, b) {
      return a + b;
    });
  return (
    <>
      <Header course={name} />
      <Content part={parts} />
      <Total sum={numExercises} />
    </>
  );
};

export default Course;
