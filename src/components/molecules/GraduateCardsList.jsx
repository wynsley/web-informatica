import { GraduateCard } from "../atoms/GraduateCard";
import styles from "./GraduateCardsList.module.css";

export function GraduateCardsList({ onSelect }) {
  const cards = [
    { key: "competencias", title: "Competencias y habilidades" },
    { key: "tecnicas", title: "Capacidades técnicas" },
    { key: "valores", title: "Valores y visión" },
  ];

  return (
    <div className={styles.targetgrad}>
      {cards.map((card) => (
        <GraduateCard
          key={card.key}
          title={card.title}
          onClick={() => onSelect(card.key)}
        />
      ))}
    </div>
  );
}
