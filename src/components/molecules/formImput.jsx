import styles from "./formInput.module.css";
import { Input } from "../atoms/input";
import { Textarea } from "../atoms/textarea";

function FormInput({ listInputs, textarea, onChange, onBlur }) {
  return (
    <div className={styles.inputForm}>
      {listInputs.map((item) => (
        <div key={item.id} className={styles.formGroup}>
          <label htmlFor={item.id} className={styles.label}>
            {item.required && <span className={styles.required}></span>}
          </label>
          
          <Input
            type={item.type}
            name={item.name}
            id={item.id}
            placeholder={item.placeholder}
            value={item.value}
            onChange={onChange}
            onBlur={onBlur}
            required={item.required}
            disabled={item.disabled}
            hasError={item.hasError}
            isValid={item.isValid}
            className={`${styles.input} ${
              item.hasError ? styles.inputError : 
              item.isValid ? styles.inputSuccess : ''
            }`}
          />
          
          {item.helperText && !item.error && (
            <small className={styles.helperText}></small>
          )}
          
          {item.error && (
            <span className={styles.errorMessage}>{item.error}</span>
          )}
        </div>
      ))}

      {textarea && (
        <div className={styles.formGroup}>
          <label htmlFor={textarea.id} className={styles.label}>
            {textarea.required && <span className={styles.required}></span>}
          </label>
          
          <Textarea
            name={textarea.name}
            id={textarea.id}
            placeholder={textarea.placeholder}
            value={textarea.value}
            onChange={onChange}
            onBlur={onBlur}
            required={textarea.required}
            disabled={textarea.disabled}
            rows={textarea.rows || 5}
            hasError={textarea.hasError}
            isValid={textarea.isValid}
            className={`${styles.textarea} ${
              textarea.hasError ? styles.inputError : 
              textarea.isValid ? styles.inputSuccess : ''
            }`}
          />
          
          <div className={styles.textareaFooter}>
            {textarea.error && (
              <span className={styles.errorMessage}>{textarea.error}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export { FormInput };
