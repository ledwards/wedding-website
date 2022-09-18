import Head from 'next/head';
import Header from '@components/Header';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <app className="h-screen flex flex-col justify-center items-center inset-0">
      <Head>
        <title>Lee Edwards & Nicole Wilke Wedding 09.09.2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row flex-wrap justify-center items-start h-screen w-screen overflow-auto">
        <header className={`${styles.header} w-5/12 inset-0 h-screen`}>
          <Header />
        </header>

        <content className="relative flex-auto flex-[1_0_50%]">
          <div className={`${styles.contentInner} absolute p-8`}>
            {children}
          </div>
        </content>
      </main>
    </app>
  );
}
