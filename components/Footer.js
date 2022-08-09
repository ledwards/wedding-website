export default function Footer() {
  return (
    <>
      <footer>
        <a className="madewith" href="https://github.com/ledwards/wedding-website" target="_blank">
          Made with{' '}
          <img src="/netliheart.svg" alt="Netlify Logo" className="logo" /> for
          you
        </a>
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 4em;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .madewith {
          display: flex;
          font-family: 'Homemade Apple', serif;
        }

        .logo {
          height: 1em;
          margin: auto 0.55em;
          filter: grayscale(100%);
        }
      `}</style>
    </>
  );
};
