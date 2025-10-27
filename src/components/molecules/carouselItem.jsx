import styles from "./carouselIcon.module.css";
import { Icon } from "../atoms/reusableIcon";
import { Text } from "../atoms/reusableText";

function CarouselItem({ icon, text }) {
  return (
    <div className={styles.carouselItem}>
      <Icon>{icon}</Icon>
      <Text variant="body">{text}</Text>
    </div>
  );
}

export { CarouselItem };
