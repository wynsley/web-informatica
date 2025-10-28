import { HiMenu, HiX } from "react-icons/hi";
import styles from "./hamburguer.module.css";

function MenuButton({ isOpen, onClick }) {
  return (
    <button 
      className={`${styles.menuButton} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <HiX className={styles.menuButton__icon} />
      ) : (
        <HiMenu className={styles.menuButton__icon} />
      )}
    </button>
  );
}

export { MenuButton };
