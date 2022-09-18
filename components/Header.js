import Image from 'next/image'

import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div className={`${styles.headerInner} flex flex-col justify-center position-relative`}>
      <Image src="/date-header.png" width={1500} height={1373} />
      <h1>Lee Edwards & Nicole Wilke</h1>
      <h2>
        Na Aina Kai Botanical Gardens <br />
        Kauai, Hawaii
      </h2>

      <a href="/rsvp" className="button">RSVP</a>
    </div>
  );
};
