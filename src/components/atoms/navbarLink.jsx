import PropTypes from "prop-types";
import styles from './navbarLink.module.css'

function NavbarLink({ text, href, onClick, className = "" , isActive = false}) {
  return (
    <a
      href={href} 
      className={`${styles.navLink} ${className} ${isActive ? styles.active: ''}`}
      onClick={onClick}
      >
      {text}
    </a>
  )
}

NavbarLink.PropTypes = {
  text:PropTypes.string.isRequired,
  href:PropTypes.string.isRequired,
  onclick:PropTypes.string.func,
  className:PropTypes.string.string,
  isActive:PropTypes.string.bool,
}

export { NavbarLink };
