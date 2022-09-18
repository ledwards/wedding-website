import React, { useState } from 'react'
import axios from 'axios'

import Head from 'next/head';
import RsvpFields from '@components/RsvpFields';

import styles from '../../../styles/rsvp.module.css';

export default function RsvpEdit(props) {
  const [currentUser, setCurrentUser] = useState(props.user);

  return (
    <app id={styles.app}>
      <Head>
        <title>RSVP :: Lee & Nicole Wedding 09.09.2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Edit Your {currentUser.party.length > 0 ? "Party's" : ""} Reservation</h3>

        <form action={`/api/guests/update`} method="get">
          <div className="form">
            <RsvpFields user={currentUser} index={0} />

            {currentUser.party.map((u, index) => {
              return <RsvpFields key={index} user={u} index={index + 1} />
            })}

            <button className="submit">Submit</button>
          </div>
        </form>

      </main>
    </app >
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(`${process.env.SITE_URL}/api/guests/${context.query.id}`);

  return {
    props: {
      user: res.data
    },
  };
}
