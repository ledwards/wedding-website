import Head from 'next/head';

import { fetchEntries } from '@utils/contentfulPosts';
import { useRef } from 'react';

import FullHeader from '@components/FullHeader';
import Footer from '@components/Footer';
import Feed from '@components/Feed';

export default function Home({ posts }) {
  const feedRef = useRef(null);

  return (
    <app className="fullscreen">
      <Head>
        <title>Lee & Nicole Wedding 09.09.2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
        <FullHeader feedRef={feedRef} />
        <Feed posts={posts} ref={feedRef} />
        <Footer />
      </main>
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
