import { NavbarLink } from "../atoms/navbarLink";
import styles from "./navbarMenu.module.css";
import { useEffect, useState } from "react";

function NavbarMenu({ isOpen, isMobile }) {
  const menu = [
    {
      text: "Cursos",
      href: "#courses",
    },
    {
      text: "Motivos",
      href: "#reasons",
    },
    {
      text: "Campo laboral",
      href: "#opportunities",
    },
    {
      text: "Perfil Egresados",
      href: "#graduates",
    },
    {
      text: "Contacto",
      href: "#contact",
    },
  ];

  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      // sección Home
      const homeSection = document.querySelector('#home');
      if (homeSection && scrollPos < homeSection.offsetTop + homeSection.offsetHeight) {
        setActive(null);
        return;
      }

      // revisar las demás secciones
      for (let item of menu) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clases dinámicas según si es mobile y si está abierto
  const menuClass = isMobile 
    ? `${styles.navbar__Menu} ${styles.navbar__Menu__mobile} ${isOpen ? styles.navbar__Menu__open : ''}` 
    : styles.navbar__Menu;

  return (
    <ul className={menuClass}>
      {
        menu.map((w, i) => {
          return (
            <li key={i} className={styles.menu__item}>
              <NavbarLink 
                text={w.text} 
                href={w.href}
                isActive={active === w.href}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

export { NavbarMenu };