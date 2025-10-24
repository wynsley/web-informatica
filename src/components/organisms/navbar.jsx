import { useState, useEffect } from 'react';
import { NavbarMenu } from "../molecules/navbarMenu";
import { Logo } from "../molecules/headerLogo";
import { MenuButton } from '../atoms/icons';
import styles from "./navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Logo />
      
      {isMobile && (
        <MenuButton 
          isOpen={isMenuOpen} 
          onClick={toggleMenu} 
        />
      )}
      
      <NavbarMenu 
        isOpen={isMenuOpen} 
        isMobile={isMobile}
      />
    </nav>
  );
}

export { Navbar };