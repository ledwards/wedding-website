import Head from 'next/head';
import Footer from '@components/Footer';
import styles from '../../styles/rsvp.module.css';

export default function RsvpHome() {
  return (
    <app id={styles.app}>
      <Head>
        <title>RSVP :: Lee & Nicole Wedding 09.09.2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h3>Find Your Invitation</h3>

        <form action="/api/guests/auth" method="get">
          <div className="form w-80">
            <label hidden htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="Find by Name" className={styles.auth} spellCheck={false} autoComplete="off" />
            <p class={styles.or}>or</p>
            <label hidden htmlFor="email">Email</label>
            <input name="email" type="text" placeholder="Find by Email" className={styles.auth} spellCheck={false} autoComplete="off" />
            <button className="submit">RSVP</button>
          </div>
        </form>

        <Footer />
      </main>
    </app >
  );
};
