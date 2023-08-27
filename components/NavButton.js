import styles from '../styles/NavButton.module.css'

function NavButton({ text, href, onClick, inheritedClass }) {
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

export default NavButton;
