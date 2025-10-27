import styles from "./reasonCard.module.css";

function ReasonCard({
  title,
  text,
  isActive,
  isVisible,
  onClick,
  onDragStart,
}) {
  return (
    <div
      className={`${styles.card} ${
        isActive ? styles.active : isVisible ? styles.visible : ""
      }`}
      onClick={onClick}
      onMouseDown={onDragStart}
      onTouchStart={onDragStart}
    >
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export { ReasonCard };
