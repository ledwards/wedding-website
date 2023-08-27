import styles from '../styles/Home.module.css'

import Layout from '@components/Layout'
import NavButton from '@components/NavButton';
import ButtonNavigation from '@components/ButtonNavigation';

export default function Home() {
  return (
    <>
      <blockquote className={styles.intro}>
        <h2>
          <b>ALOHA!</b>&nbsp;<i>We are so excited to celebrate our wedding with you!</i>
        </h2>

        <p>
          Below you can find local recommendations for activities and dining,
          the wedding schedule, answers to frequently asked questions, and more.
          If you have any questions you can’t find the answers to here, please reach out to us.
        </p>
      </blockquote>

      <ButtonNavigation />
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return (
    <Layout scrollable>
      {page}
    </Layout>
  )
}

// export async function getStaticProps() {
//   const res = await fetchEntries('blogPost');
//   const posts = res.map((p) => {
//     return {
//       id: p.sys.id,
//       date: p.sys.createdAt,
//       ...p.fields
//     };
//   })

//   return {
//     props: {
//       posts,
//     },
//   };
// };
