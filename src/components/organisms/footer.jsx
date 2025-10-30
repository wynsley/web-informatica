import styles from './footer.module.css'
import {
  FaThinkPeaks,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerContact}>
        <a href='#home' className={styles.icon}>
          <FaThinkPeaks />
        </a>
        <div className={CSSStyleSheet.contactCont}>
          <a href="" className={styles.contactLink}>
            <FaWhatsapp />
          </a>
          <a href="" className={styles.contactLink}>
            <FaInstagram />
          </a>
          <a href="" className  ={styles.contactLink}>
            <FaFacebookF />
          </a>
        </div>
      </div>
      <hr className={styles.lineFooter} />
      <div className={styles.containerAutors}>
        <small className={styles.copyright}>
          © 2025 web informática. Todos los derechos reservados.
        </small>
        <small className={styles.autores}>
          <span>Autores:</span> Wynsley Durán , Cesar Guevara, Luis Solano
        </small>
      </div>
    </footer>
  );
}

export { Footer };
