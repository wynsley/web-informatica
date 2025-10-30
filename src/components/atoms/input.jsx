import styles from "./input.module.css";


function Input({ 
  type = "text", 
  name, 
  id, 
  placeholder, 
  value, 
  onChange, 
  onBlur,
  required = false, 
  disabled = false,
  hasError = false,
  isValid = false,
  className = ""
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      disabled={disabled}
      className={`${styles.input} ${className} ${
        hasError ? styles.error : isValid ? styles.valid : ''
      }`}
      autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : 'off'}
    />
  );
}

export { Input };
