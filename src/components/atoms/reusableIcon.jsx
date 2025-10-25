import styles from './reusableIcon.module.css';

function Icon({ children, size = 'large' }) {
  return (
    <div className={`${styles.icon} ${styles[size]}`}>
      {children}
    </div>
  );
}

export { Icon };