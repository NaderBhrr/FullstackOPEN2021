import Header from './Header/Header';
import Content from './Content/Content';
import Total from './Total/Total';
import './Course.css';

const Course = ({ course }) => (
  <section>
    <Header courseTitle={course.name} />

    <article className='single-course'>
      <p>
        <strong>Course Information:</strong>
      </p>
      <Content course={course} />
      <Total course={course} />
    </article>
  </section>
);

export default Course;
