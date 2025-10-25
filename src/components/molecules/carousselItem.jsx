import styles from "./carousselIcon.module.css";
import { Icon } from "../atoms/reusableIcon";
import { Text } from "../atoms/reusableText";

function CarousselItem({ icon, text }) {
  return (
    <div className={styles.carouselItem}>
      <Icon>{icon}</Icon>
      <Text variant="body">{text}</Text>
    </div>
  );
}

export { CarousselItem };
