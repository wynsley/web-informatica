import { useState } from 'react';
import { CoursesNav } from '../molecules/coursesNav';
import { CoursesGrid } from '../molecules/coursesGrid';
import { coursesData } from './arraisData';
import styles from './sectionCourses.module.css';

function Courses() {
  const [activeCycle, setActiveCycle] = useState(1);

  const handleCycleChange = (cycle) => {
    setActiveCycle(cycle);
  };

  return (
    <section id="courses" className={styles.courses}>
      <h2 className={styles.mainTitle}>Cursos</h2>
      <hr className={styles.line} />
      
      <div className={styles.contentWrapper}>
        <CoursesNav
          activeCycle={activeCycle}
          onCycleChange={handleCycleChange}
        />
        
        <div className={styles.coursesContent}>
          <h3 className={styles.cycleTitle}> {activeCycle} Ciclo </h3>
          <CoursesGrid courses={coursesData[activeCycle]} />
        </div>
      </div>
    </section>
  );
}

export { Courses };