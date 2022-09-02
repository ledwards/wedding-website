import React, { useState } from 'react'
import axios from 'axios'

import Head from 'next/head';
import Footer from '@components/Footer';
import RsvpFields from '@components/RsvpFields';

export default function RsvpEdit(props) {
  const [currentUser, setCurrentUser] = useState(props.user);

  return (
    <app>
      <Head>
        <title>RSVP :: Lee & Nicole Wedding 09.09.2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Thank you!</h1>

        <Footer />
      </main>
    </app>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(`http://localhost:8888/api/guests/${context.query.id}`);

  return {
    props: {
      user: res.data
    },
  };
}
