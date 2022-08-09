export default function Header({ feedRef }) {
  const scrollToPosts = () => {
    const comp = feedRef.current
    window.scrollTo({ left: 0, top: comp.offsetTop, behavior: "smooth" })
  };

  return <div className="header h-screen">
    <div className="header-container">
      <h1 className="title">
        Lee & <br />
        Nicole
      </h1>
      <h2 className="subtitle">
        Na Aina Kai Botanical Garden <br />
        Kilauea, Kauaʻi <br />
        09.09.2023
      </h2>
    </div>
    <div className="more">
      <a onClick={scrollToPosts}>&#8681;</a>
    </div>

    <style jsx>{`
      .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
      }
      
      .title {
        font-family: 'Playfair Display', serif;
        font-size: 8em;
        line-height: 0.9em;
        font-weight: 700;
        text-align: center;
      }
      
      .subtitle {
        font-family: 'Homemade Apple', serif;
        text-align: center;
        margin-top: 1.5em;
        font-size: 2em;
      }
      
      .more {
        text-align: center;
        cursor: pointer;
        position: absolute;
        width: 100%;
      }
      
      .more {
        bottom: 0.5em;
        font-size: 2em;
      }
      
      @media only screen and (max-width: 768px) {
        .title {
          font-size: 6em;
        }
        
        .subtitle {
          font-size: 1.1em;
        }
      }
      
      @supports (-webkit-touch-callout: none) {
        .header {
          height: -webkit-fill-available;
        }
      }
    `}</style>

  </div >
}
