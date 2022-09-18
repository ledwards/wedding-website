import React, { useState } from 'react'
import axios from 'axios'

import Head from 'next/head';
import styles from '../../styles/rsvp.module.css';

export default function RsvpEdit(props) {
  const [currentUser, setCurrentUser] = useState(props.user);
  const partyMembersNames = [currentUser.name].concat(currentUser.party.map(u => u.name));
  let joinedPartyMembersNames;
  if (partyMembersNames.length == 1) {
    joinedPartyMembersNames = currentUser.name;
  } else {
    joinedPartyMembersNames = partyMembersNames.slice(0, -1).join(', ') + ' & ' + partyMembersNames.slice(-1);
  }

  return (
    <app id={styles.app}>
      <Head>
        <title>RSVP :: Lee & Nicole Wedding 09.09.2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Thank you!</h3>
        <h4>We have the reservation{partyMembersNames.length > 1 ? 's' : ''} for {joinedPartyMembersNames}</h4>
        <br />
        <p>Content for logged in people goes here</p>

      </main>
    </app>
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
