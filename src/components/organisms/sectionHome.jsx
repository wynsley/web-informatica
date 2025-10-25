import styles from "./sectionHome.module.css";
import { HomeDescription } from "../molecules/homeDescription";

function Home() {
  
  return (
    <section id="home" className={styles.home}>
      <img src="/BGHOME.jpg" alt="Fondo" className={styles.bgImage} />
      <HomeDescription/>
    </section>
  );
}

export { Home };
