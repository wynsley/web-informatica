import { DotsRe } from "../atoms/dots";
import styles from "./reasonsDots.module.css";

function ReasonsDots({ total, currentIndex, onIndicatorClick }) {
  return (
    <div className={styles.controls}>
      {Array.from({ length: total }).map((_, index) => (
        <DotsRe
          key={index}
          isActive={index === currentIndex}
          onClick={() => onIndicatorClick(index)}
        />
      ))}
    </div>
  );
}

export { ReasonsDots };
