import PropTypes from "prop-types";
import styles from "./customLink.module.css";

function CustomLink({ href, text, children, className = "", onClick,  }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${className} ${styles.customlink}`}
    >
      {children || text}
    </a>
  );
}

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.string,
};

export { CustomLink };