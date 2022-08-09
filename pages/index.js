import Head from 'next/head';

import { fetchEntries } from '@utils/contentfulPosts';
import { useRef } from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Feed from '@components/Feed';

export default function Home({ posts }) {
  const feedRef = useRef(null);

  return (
    <app>
      <Head>
        <title>Lee & Nicole Wedding 09.09.2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header feedRef={feedRef} />
        <Feed posts={posts} ref={feedRef} />
        <Footer />
      </main>

      <style jsx>{`
        app {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        @media only screen and (max-width: 768px) {
          main {
            width: 95%;
          }
        }
      `}</style>
    </app>
  );
};

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = res.map((p) => {
    return {
      id: p.sys.id,
      date: p.sys.createdAt,
      ...p.fields
    };
  })

  return {
    props: {
      posts,
    },
  };
};
