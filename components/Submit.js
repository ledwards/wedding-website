import Button from '@components/Button'
import styles from '../styles/Submit.module.css'

function Submit({ label }) {
  return (
    <Button
      href="#"
      text={label}
      inheritedClass={styles.submit}
      onClick={() => document.getElementById("form").submit()}
    />
  );
}

export default Submit;
