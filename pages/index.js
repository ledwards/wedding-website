import { fetchEntries } from '@utils/contentfulPosts';

import Layout from '@components/Layout'
import Feed from '@components/Feed';

export default function Home({ posts }) {
  return (
    <Feed posts={posts} />
  );
};

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

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
