export default function Header({ feedRef }) {
  const scrollToPosts = () => {
    const comp = feedRef.current;
    window.scrollTo({ left: 0, top: comp.offsetTop, behavior: "smooth" });
  };

  return (
    <header className="h-screen">
      <h1>
        Lee & <br />
        Nicole
      </h1>
      <h2>
        Na Aina Kai Botanical Garden <br />
        Kilauea, Kauaʻi <br />
        09.09.2023
      </h2>
      <a onClick={scrollToPosts}>&#8681;</a>

      <style jsx>{`
      header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
      }
      
      h1 {
        font-family: 'Playfair Display', serif;
        font-size: 8em;
        line-height: 0.9em;
        font-weight: 700;
        text-align: center;
      }
      
      h2 {
        font-family: 'Homemade Apple', serif;
        text-align: center;
        margin-top: 1.5em;
        font-size: 2em;
      }
      
      a {
        text-align: center;
        cursor: pointer;
        position: absolute;
        width: 100%;
        bottom: 0.5em;
        font-size: 2em;
      }
      
      @media only screen and ( max-height: 549px ) {
        a {
          display: none;
        }
        
        header {
          margin-bottom: 1em;
        }
      }
      
      @media only screen and (max-width: 768px) {
        h1 {
          font-size: 6em;
        }
        
        h2 {
          font-size: 1.1em;
        }
      }
      
      @supports (-webkit-touch-callout: none) {
        header {
          height: -webkit-fill-available;
        }
      }
    `}</style>
    </header>
  );
};
