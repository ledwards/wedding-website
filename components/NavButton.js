import styles from '../styles/NavButton.module.css'

function NavButton({ text, href, onClick, inheritedClass, target }) {
  return (
    <a
      href={href ? href : "#"}
      className={inheritedClass ? `${styles.button} ${inheritedClass}` : styles.button}
      onClick={onClick}
      target={target}
    >
      {text}
    </a>
  );
}

export default NavButton;
