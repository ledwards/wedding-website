import styles from '../styles/FullHeader.module.css';

export default function FullHeader({ feedRef }) {
  const scrollToPosts = () => {
    const comp = feedRef.current;
    window.scrollTo({ left: 0, top: comp.offsetTop, behavior: "smooth" });
  };

  return (
    <header id={styles.fullHeader} className="h-screen">
      < h1 >
        Lee & <br />
        Nicole
      </h1 >
      <h2>
        Na Aina Kai Botanical Garden <br />
        Kilauea, Kauaʻi <br />
        09.09.2023
      </h2>
      <a onClick={scrollToPosts}>&#8681;</a>
    </header >
  );
};
