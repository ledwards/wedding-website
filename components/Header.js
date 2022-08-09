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
      
      .header-container {
      }
      
      .title {
        font-family: 'Playfair Display', serif;
        font-size: 48pt;
        font-weight: 700;
        text-align: center;
      }
      
      .subtitle {
        font-family: 'Homemade Apple', serif;
        text-align: center;
        margin-top: 0.5em;
        font-size: 13pt;
      }
      
      .more {
        margin: 0 auto;
        cursor: pointer;
      }
      
      .more a {
        position: absolute;
        bottom: 0.5em;
        font-size: 24pt;
      }
    `}</style>

  </div >
}
