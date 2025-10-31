import styles from "./Modal.module.css";

export function Modal({ title, text, onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{title}</h2>
        <p>{text}</p>
        <button onClick={onClose} className={styles.closeBtn}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
