import PropTypes from "prop-types";
import styles from "./customLink.module.css";

function CustomLink({ href, text, className = "", onClick, size = "16px" }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${className} ${styles.customlink}`}
      style={{ fontSize: size }}
    >
      {text}
    </a>
  );
}

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export { CustomLink };
