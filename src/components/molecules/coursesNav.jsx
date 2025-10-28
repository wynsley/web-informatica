import { CoursesBtn } from "../atoms/CoursesBtn";
import styles from "./coursesNav.module.css";

function CoursesNav({ activeCycle, onCycleChange }) {
  const cycles = [1, 2, 3, 4, 5, 6];

  return (
    <nav className={styles.navigation}>
      <h3 className={styles.navTitle}>Ciclos</h3>
      <div className={styles.tabsContainer}>
        {cycles.map((cycle) => (
          <CoursesBtn
            key={cycle}
            cycle={cycle}
            isActive={activeCycle === cycle}
            onClick={() => onCycleChange(cycle)}
          />
        ))}
      </div>
    </nav>
  );
}

export { CoursesNav };
