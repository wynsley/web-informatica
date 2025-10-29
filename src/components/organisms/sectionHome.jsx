import styles from "./sectionHome.module.css";
import { HomeDescription } from "../molecules/homeDescription";

function Home() {
  
  return (
    <section id="home" className={styles.home}>
      <img src="/BGHOME.jpg" alt="Fondo" className={styles.bgImage} />
      <img className={styles.img} src="/INFORMATIC.png" alt="imagen referente a la informática" />
      <HomeDescription/>
    </section>
  );
}

export { Home };
