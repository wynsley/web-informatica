import styles from "./titlesReasons.module.css";

function Titles({ title, subtitle }) {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

export { Titles };
