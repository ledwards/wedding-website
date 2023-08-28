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

      <main className={`items-center flex flex-row flex-wrap justify-center h-screen w-screen ${scrollable ? "overflow-y-auto overflow-x-hidden" : styles.mobileOnlyScroll}`}>
        <header className={`flex-1 max-w-2xl ${styles.header} w-5/12 inset-0 h-screen ${noHeaderOnMobile ? styles.hiddenOnMobile : ""}`}>
          <Header buttonText={ctaText} buttonHref={ctaHref} />
        </header>

        <a id="content" className={styles.anchor} />

        <content className={`flex-1 max-w-2xl ${styles.content} ${scrollable ? "relative" : "h-screen overflow-auto flex flex-col justify-center"} w-7/12 flex-start`}>
          <div className={`p-8 ${styles.contentInner}`}>
            {children}
          </div>
        </content>
      </main>
    </app>
  );
}
