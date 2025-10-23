import { NavbarLink } from "../atoms/navbarLink";
import styles from "./navbarMenu.module.css";
import { useEffect, useState } from "react";
import { MenuIcon } from "../atoms/icons";
function NavbarMenu() {
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

  const [active, setActive] = useState(null); // null = ninguna sección activa

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      // sección Home
      const homeSection = document.querySelector('#home');
      if (homeSection && scrollPos < homeSection.offsetTop + homeSection.offsetHeight) {
        setActive(null); // estamos en Home, ningún link activo
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
    handleScroll(); // actualizar al cargar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ul className={styles.navbar__Menu}>
      {
        menu.map((w, i) => {
          return (
            <li key={i} className={styles.menu__item}>
              <NavbarLink 
                text={w.text} 
                href={w.href}
                isActive= {active===w.href}
              />
            </li>
          )
        })
      }
      <MenuIcon className={styles.menu__icon}/>
    </ul>
  )
}

export { NavbarMenu };
