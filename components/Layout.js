import Head from 'next/head'
import Header from '@components/Header'
import styles from '../styles/Layout.module.css'

export default function Layout({ children, ctaText, ctaHref, scrollable, noHeaderOnMobile }) {
  return (
    <app className="h-screen flex flex-col justify-center items-center inset-0">
      <Head>
        <title>Lee Edwards & Nicole Wilke Wedding 09.09.2023</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1" />
      </Head>

      <main className={`flex flex-row flex-wrap justify-center items-start h-screen w-screen ${scrollable ? "overflow-y-auto overflow-x-hidden" : styles.mobileOnlyScroll}`}>

        <header className={`${styles.header} w-5/12 inset-0 h-screen ${noHeaderOnMobile ? styles.hiddenOnMobile : ""}`}>
          <Header buttonText={ctaText} buttonHref={ctaHref} />
        </header>


        <a id="content" className={styles.anchor} />

        <content className={`${styles.content} ${scrollable ? "relative" : "h-screen overflow-auto flex flex-col justify-center items-center"} w-7/12 flex-auto`}>
          <div className={`p-8 ${scrollable ? "absolute" : null} ${styles.contentInner}`}>
            {children}
          </div>
        </content>
      </main>
    </app>
  );
}
