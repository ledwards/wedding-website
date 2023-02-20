import { fetchEntries } from '@utils/contentful';

import Layout from '@components/Layout'
import Page from '@components/Page';

export default function Content({ post }) {
  return (
    <Page content={post.fields} />
  );
};

Content.getLayout = function getLayout(page) {
  return (
    <Layout ctaText="RSVP" ctaHref="/rsvp" scrollable>
      {page}
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetchEntries('page');
  const slugs = res.map((p) => `/${p.fields.path}`);
  return { paths: slugs, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetchEntries('page');
  const post = res.filter((p) => p.fields.path == params.slug)[0];

  return {
    props: {
      post,
    },
  };
};
