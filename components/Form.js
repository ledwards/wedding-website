import styles from '../styles/Form.module.css'

function Form({ children, action, method, error, nested }) {
  return (
    <>
      {error ? <error class={styles.error}>{decodeURIComponent(error)}</error> : ""}

      <form id="form" className={`${styles.form} ${nested ? styles.nested : ""}`} action={action} method={method}>
        {children}
      </form>
    </>
  );
}

export default Form;
