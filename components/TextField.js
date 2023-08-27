import styles from '../styles/TextField.module.css'

function TextField({ name, label, placeholder, defaultValue, hideLabel, hero, className, disabled }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      document.getElementById("form").submit();
    }
  }

  return (
    <>
      <input
        className={`${className} ${styles.field} ${hideLabel ? styles.standalone : null} ${hero ? styles.hero : null}`}
        name={name}
        type="text"
        placeholder={placeholder}
        spellCheck={false}
        autoComplete="off"
        onKeyDown={handleKeyDown}
        defaultValue={defaultValue}
        disabled={disabled ? "disabled" : null}
      />

      {!hideLabel &&
        <label className={styles.label} htmlFor={name}>{label}</label>
      }
    </>
  );
}

export default TextField;
