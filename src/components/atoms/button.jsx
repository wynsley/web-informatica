import PropTypes from "prop-types";
import styles from "./button.module.css";

function Button({
  label,
  cycle,
  onClick,
  type = "button",
  isActive = false,
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      className={`${styles.tab} ${isActive ? styles.active : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {cycle}{' '}{label} 
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,   
  onClick: PropTypes.func,              
  type: PropTypes.string,               
  disabled: PropTypes.bool,             
  className: PropTypes.string,          
};

export { Button };
