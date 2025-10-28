import styles from "./coursesBtn.module.css";

function CoursesBtn({ cycle, isActive, onClick }) {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {cycle} Ciclo 
    </button>
  );
}

export { CoursesBtn };
