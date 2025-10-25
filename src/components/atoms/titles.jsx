import styles from "./titles.module.css";

function Title() {
  const title1 = "Innovación, código y conocimiento es";
  const title2 = "el poder de la Informática en acción";
  return (
    <h2 className={styles.title}>
      {title1} <span>{title2}</span>
    </h2>
  );
}

export { Title };
