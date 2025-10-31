import styles from "./coursesCard.module.css";

function CourseCard({ title, description, image }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardBackground}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.cardOverlay} />
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export { CourseCard };
