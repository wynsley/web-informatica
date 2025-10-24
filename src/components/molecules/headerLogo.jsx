import { CustomLink } from "../atoms/customLInk";
import styles from "./headerLogo.module.css";

function Logo() {
  const logo = "Informática";
  return (
    <CustomLink href="/" className={styles.logo} >
      <img src="/LOGO.png" alt="Logo" className={styles.logo__image} />
      <span className={styles.logo__name}>{logo}</span>
    </CustomLink>
  );
}

export { Logo };
