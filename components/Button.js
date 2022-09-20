import styles from '../styles/Button.module.css'

function Button({ text, href, onClick, inheritedClass }) {
  return (
    <a
      href={href ? href : "#"}
      className={`${styles.button} ${inheritedClass}`}
      onClick={onClick}
    >
      {text}
    </a>
  );
}

export default Button;
