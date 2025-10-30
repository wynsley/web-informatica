import styles from "./textarea.module.css";

function Textarea({ 
  name, 
  id, 
  placeholder, 
  value, 
  onChange,
  onBlur, 
  required = false, 
  disabled = false, 
  rows = 4,
  hasError = false,
  isValid = false,
  className = ""
}) {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      disabled={disabled}
      rows={rows}
      className={`${styles.textarea} ${className} ${
        hasError ? styles.error : isValid ? styles.valid : ''
      }`}
    />
  );
}

export { Textarea };