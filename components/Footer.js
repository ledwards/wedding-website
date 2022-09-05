import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <a className={styles.madewith} href="https://github.com/ledwards/wedding-website" target="_blank">
        Made with{' '}
        <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for
        you
      </a>
    </footer>
  );
};
