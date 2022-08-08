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
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .madewith {
          display: flex;
        }

        .logo {
          height: 1em;
          margin: 5px;
        }
      `}</style>
    </>
  )
}
