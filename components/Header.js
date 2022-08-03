export default function Header() {
  return <div>
    <h1 className="title">Lee & Nicole</h1>
    <h2 className="subtitle">9.9.23 &#x2766; Kauai, HI</h2>

    <style jsx>{`
      .title {
        font-family: 'Playfair Display', serif;
        font-size: 48px;
        font-weight: 700;
        text-align: center;
      }
      
      .subtitle {
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        text-align: center;
      }
    `}</style>

  </div>
}
