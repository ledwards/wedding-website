export default function Header() {
  const scrollToPosts = () => {
    window.scrollBy({ left: 0, top: window.innerHeight, behavior: "smooth" })
    return true
  };

  return <div className="header h-screen">
    <div className="header-container">
      <h1 className="title">Lee & Nicole</h1>
      <h2 className="subtitle">09.09.2023 · Na Aina Kai Botanical Garden · Kilauea, Kauaʻi</h2>
    </div>
    <div className="more">
      <a onClick={scrollToPosts}>&#8681;</a>
    </div>

    <style jsx>{`
      .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      
      .title {
        font-family: 'Playfair Display', serif;
        font-size: 4em;
        font-weight: 700;
        text-align: center;
      }
      
      .subtitle {
        font-family: 'Homemade Apple', serif;
        text-align: center;
        margin-top: 0.5em;
        font-size: 1.1em;
      }
      
      .more {
        margin: 0 auto;
        cursor: pointer;
      }
      
      .more a {
        position: absolute;
        bottom: 0.5em;
        font-size: 2em;
      }
      
      @media only screen and (max-width: 768px) {
        .title {
          font-size: 3.5em;
        }
        
        .subtitle {
          font-size: 1em;
        }
        
        .header-container {
          margin-top: -2.5em;
        }
      }
    `}</style>

  </div >
}
