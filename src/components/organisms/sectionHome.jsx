import styles from "./sectionHome.module.css";

function Home() {
  const title1 = "Innovación, código y conocimiento es";
  const title2 = "el poder de la Informática en acción";
  const description = `Explora el poder de la tecnología, el código y la innovación. 
  Cada línea que escribimos, cada sistema que diseñamos y cada idea que desarrollamos, 
  construye el mundo digital del mañana.Bienvenido a mi espacio, donde la Informática 
  se convierte en conocimiento, creatividad y evolución.`;
  return (
    <section id="home" className={styles.home}>
      <img src="/BGHOME.jpg" alt="Fondo" className={styles.bgImage} />
      <article className={styles.article}>
        <h2 className={styles.title}>
          {title1} <span>{title2}</span>
        </h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <a href="" className={`${styles.btn} ${styles.btnLeft}`}>Háblanos</a>
          <a href="#contact" className={`${styles.btn} ${styles.btnRight}`}>Déjanos tus datos</a>
        </div>
      </article>
    </section>
  );
}

export { Home };
