import Head from 'next/head';
import Footer from '@components/Footer';

export default function RsvpHome() {
  return (
    <app>
      <Head>
        <title>RSVP :: Lee & Nicole Wedding 09.09.2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Find Your Invitation</h1>

        <form action="/api/guests/auth" method="get">
          <input name="name" type="text" placeholder="Find by Name" spellCheck={false} />
          <p>- OR -</p>
          <input name="email" type="text" placeholder="Find by Email" spellCheck={false} />
          <button>RSVP</button>
        </form>

        <Footer />
      </main>
    </app>
  );
};
