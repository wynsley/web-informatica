import { CourseCard } from "./coursesCard";
import styles from "./CoursesGrid.module.css";

function CoursesGrid({ courses }) {
  return (
    <div className={styles.grid}>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          image={course.image}
        />
      ))}
    </div>
  );
}

export { CoursesGrid };
