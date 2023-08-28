import Image from 'next/image'
import Button from '@components/Button'
import styles from '../styles/Header.module.css'

export default function Header({ buttonText, buttonHref }) {
  const scrollToPosts = () => {
    document.getElementById("content").scrollIntoView();
  };

  return (
    <div className={`${styles.headerInner} max-w-2xl flex flex-col justify-center position-relative`}>
      <Image src="/date-header.png" width={1500} height={1373} />
      <h1>Lee Edwards & Nicole Wilke</h1>
      <h2>
        Na ‘Āina Kai Botanical Gardens <br />
        Kaua‘i, Hawai‘i
      </h2>
    </div>
  );
};
