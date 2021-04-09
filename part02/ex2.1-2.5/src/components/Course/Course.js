import Header from '../Header/Header';
import Content from '../Content/Content';
import Total from '../Total/Total';

const Course = ({ course }) => (
  <>
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
  </>
);

export default Course;
