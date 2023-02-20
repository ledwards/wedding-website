import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Playfair+Display:0,800" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
