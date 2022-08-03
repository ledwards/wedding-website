import Head from 'next/head'

import { fetchEntries } from '@utils/contentfulPosts'

import Header from '@components/Header'
import Footer from '@components/Footer'
// import Post from '@components/Post'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Lee & Nicole Wedding 9.9.2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/*
        <div className="posts">
          {posts.map((p) => {
            return <Post key={p.id} title={p.title} image={p.heroImage.fields} body={p.body} date={p.date} />
          })}
        </div>
        */}
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .posts {
          display: flex;
        }
      `}</style>

    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return {
      id: p.sys.id,
      date: p.sys.createdAt,
      ...p.fields
    }
  })

  return {
    props: {
      posts,
    },
  }
}
