import styles from "./dots.module.css";
function DotsRe({ isActive, onClick, className= '' }) {
  return (
    <button
      className={`${styles.indicator} ${className} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      aria-label={`Go to slide ${isActive ? "current" : ""}`}
    />
  );
}

export { DotsRe };
