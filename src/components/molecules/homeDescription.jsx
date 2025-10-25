import styles from "./homeDescription.module.css";
import { Title } from "../atoms/titles";
import { Paragraph } from "../atoms/paragraph";
import { CustomLink } from "../atoms/customLInk";

function HomeDescription() {
  return (
    <article className={styles.article}>
      <Title/>
      <Paragraph/>
      <div className={styles.buttons}>
        <CustomLink href="" text='Háblanos' className={`${styles.btn} ${styles.btnLeft}`}/>
        <CustomLink href="#contact" text='Déjanos tus datos' className={`${styles.btn} ${styles.btnRight}`}/>
      </div>
    </article>
  );
}

export {HomeDescription}
