import styles from '../styles/Button.module.css'

function Button({ text, href, onClick, inheritedClass }) {
  return (
    <a
      href={href ? href : "#"}
      className={inheritedClass ? `${styles.button} ${inheritedClass}` : styles.button}
      onClick={onClick}
    >
      {text}
    </a>
  );
}

export default Button;
