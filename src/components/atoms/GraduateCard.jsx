import styles from "./GraduateCard.module.css";

export function GraduateCard({ title, onClick }) {
  return (
    <div className={styles.cardgrad} onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
}
