import styles from './reusableText.module.css';

function Text({ children, variant = 'body' }) {
  return (
    <p className={`${styles.text} ${styles[variant]}`}>
      {children}
    </p>
  );
}

export { Text };